import asynchandler from "express-async-handler";
import { User } from "../models/userSchema";
import bcrypt from "bcrypt";


const getAllUser = asynchandler(async (req, res) => {
  const allUsers = await User.find();
  if (allUsers) res.status(200).json(allUsers);
  else {
    res.status(405)
    throw new Error("Users Not Found")
  }
});

const getUserByID = asynchandler(async(req, res) => {
  const userID = req.params.id;
  const user = await User.findById({id:userID})
  if(user) res.status(200).json(user);
  else res.status(400).json("something wrong");
});

const updateUser =  asynchandler(async(req,res) => {

});


const deleteUSer =  asynchandler(async(req,res) => {
  const userID = req.params.id;
  const deleteUSer = await User.deleteOne({id:userID})
  if(deleteUSer) res.status(200).json("user deleted");
  else res.status(400).json("user not found")
});


export { getAllUser,getUserByID,updateUser,deleteUSer };
