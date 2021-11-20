import express from'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/usermodel.js'

const userRouter=express.Router();

userRouter.get('/seed',expressAsyncHandler(async(req,res)=>{
  //  console.log(data)
    //await User.remove({});
const createdUsers=await User.insertMany(data.users)
res.send({createdUsers});
})
);

export default userRouter;