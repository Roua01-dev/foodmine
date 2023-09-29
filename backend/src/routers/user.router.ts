import {Router} from 'express';
import { sample_users } from '../data';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { User, UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../constante/http_status';
import bcrypt from 'bcryptjs';
const router = Router();
 
router.get("/seed", asyncHandler(
  async (req, res) => {
     const usersCount = await UserModel.countDocuments();
     if(usersCount> 0){
       res.send("Seed is already done!");
       return;
     }
 
     await UserModel.create(sample_users);
     res.send("Seed Is Done!");
 }
 ))



   
     //if(user && (await bcrypt.compare(password,user.password))) {
     // res.send(generateTokenReponse(user));
   //  }
    // else{
     //  res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
     //}
  

router.post("/login", 
  async function (req, res) {
   try {
     const {email, password} = req.body;
       console.log('Email: ', email,'Password:',password );
     const user = await UserModel.findOne({email});
    // return res.status(200).json({ message: 'Login successful', user });

  if(user ) {
     const token=generateTokenReponse(user);
      return res.send(token);
      
     }
    else{
      return res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
     }
    
   } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
   }


  
  }

  
)
  
router.post('/register', asyncHandler(
  async (req, res) => {
    const {name, email, password, address} = req.body;
    console.log(`Name:${name}, Email:${email}`);
    const user = await UserModel.findOne({email});
    if(user){
      res.status(HTTP_BAD_REQUEST)
      .send('User is already exist, please login!');

      return;
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser:User = {
      id:'',
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      address,
      isAdmin: false
    }

    const dbUser = await UserModel.create(newUser);
    res.send(generateTokenReponse(dbUser));
  }
))

  const generateTokenReponse = (user : User) => {
    const token = jwt.sign({
     id:user.id,  email:user.email, isAdmin: user.isAdmin
    },process.env.JWT_SECRET!,{
      expiresIn:"30d"
    });
  
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      address: user.address,
      isAdmin: user.isAdmin,
      token: token
    };
  }
  

  export default router;