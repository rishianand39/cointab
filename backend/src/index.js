import express from "express";
import cors from "cors"
import dotenv from "dotenv";
const app = express();
dotenv.config()

app.use(express.json())
import user from "./controllers/user.controller.js"
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).json("Welcome to cointab api")
})
app.use("/api", user)


import connect from "./configs/db.js";
const port =process.env.PORT || 8000;

app.listen(port,async()=>{
    try {
        await connect();
        console.log(`server running on port ${port}`);
    } catch (error) {
        console.log(error);
    }
})
export default app;