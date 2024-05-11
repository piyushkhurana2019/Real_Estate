import express from 'express'

const app = express();

app.listen(3000, ()=>{
    console.log("Server is listnening on port 3000!");
}
);