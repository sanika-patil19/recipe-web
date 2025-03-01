import express from 'express';
import { login, register } from '../controllers/user.js';




const router=express.Router();



router.post('/register',register);

router.post('/login',login);


router.post('/register',(req,res)=>{

    const{name,gmail,password}=req.body

    console.log(req.body);


})
export default  router