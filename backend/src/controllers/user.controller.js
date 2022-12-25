import express from "express";
import axios from "axios";
const router = express.Router();
import { UserModel } from "../models/user.model.js";

router.post("/user", async (req, res) => {
  try {
    const finduser = async () => {
      let user = await axios.get(
        "https://randomuser.me/api/?inc=gender,name,nat"
      );
      return user.data.results;
    };
    let user=[]
    for(let i=1;i<=5;i++){
       let tem =await finduser();
       user.push(tem[0]);
    }
    let adduser= await UserModel.insertMany(user)
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    let rm=await UserModel.remove()
    return res.status(200).json("removed")
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

router.get("/", async (req, res) => {
    
  try {
    let data=await UserModel.find();

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

export default router;
