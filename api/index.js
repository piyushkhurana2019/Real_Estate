import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';   // to get data from the cookie (used in verifyUser function to get token from cookie)
import listingRouter from './routes/listing.route.js';
import path from 'path';

dotenv.config();

const __dirname = path.resolve();  // To create dynamic path name to my application as we do not have this type of structure on servers(like /Desktop/VScode/Projects/..etc.)

const app = express();
app.use(express.json());

app.use(cookieParser());

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>
console.log(err));
app.listen(3000, ()=>{
    console.log("Server is listnening on por̉̉t 3000!");
}
);

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {     // This means any address which is other than above 3 will going to run this
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
})