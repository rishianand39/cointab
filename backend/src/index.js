import express from "express";
const app = express();
import cors from "cors"

app.use(cors())
app.use(express.json())
import user from "./controllers/user.controller.js"

app.get("/",(req,res)=>{
    return res.status(200).json("Welcome to cointab api")
})
app.use("/api", user)
export default app;