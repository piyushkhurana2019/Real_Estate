import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';   // to get data from the cookie (used in verifyUser function to get token from cookie)

dotenv.config();

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

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
})