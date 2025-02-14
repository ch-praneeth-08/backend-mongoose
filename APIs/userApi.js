const express = require('express') //importing express modules
const user = express.Router(); //creating mini express application 

const User = require('../Models/userModel')//importing the user schema from server


user.use(express.json())

user.get('/users',async(req,res)=>{
    const usersList = await User.find()
    res.send({message:"users",payload: usersList})
})

user.post('/user',async(req,res)=>{
    const newUser = req.body;
    //creating user document
    try{
        const userDoc = new User(newUser)
    //save to database
    await userDoc.save()
    res.send({
        message:"new user created..."
    })
    }
    catch(err){
        console.log("error in saving the document \n", err)
    }
})
module.exports = user;//exporting the api using common js module 