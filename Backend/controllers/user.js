import bcrypt from 'bcryptjs';
import { User } from '../Models/user.js';





export const register=async(req,res)=>{
    
    const{name,gmail,password}=req.body

    try{
        let user=await User.findOne({gmail});
        console.log("user is coming from login",user)

    if( user) return  res.json({message:"User Already Exist"});

        const hashPass=await bcrypt.hash(password,10)

        user=await User.create({name,gmail,password:hashPass})


        res.json({message:"User Registered Successfully..!",user})



    }catch(error){
        res.json({message:error})
    }
    
}
export const login=async(req,res)=>{

    const{gmail,password}=req.body

    try{
        let user=await User.findOne({gmail});

        if(!user) return res.json({message:"User Not Exist"})

            const validPass=await bcrypt.compare(password,user.password);

            if(!validPass) return res.json({message:"Invalid Credentials"});

            const token =Jwt.sign({userId:user._id},"@#$%^&*()",{
                expiresIn:'1d'
            })

            res.json({message:`Welcome ${user.name}`})
    }catch(error){

        res.json({message:error.message})
    }
}