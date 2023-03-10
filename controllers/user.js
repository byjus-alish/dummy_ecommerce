const User         = require('../models/user');
const asyncWrapper = require('../middleware/async')
const bcrypt      = require('bcrypt') 

const hashPassword = async(password) => {
    let saltRounds        = 4;
    let hashedPassword    = bcrypt
    .genSalt(saltRounds)
    .then(salt => {
      return bcrypt.hash(password, salt)
    })
    .catch(err => console.error(err.message));
    return hashedPassword;
}
const getAllUser = asyncWrapper(async(req,res) =>{
    const user = await User.find({});
    res.status(200).json({ user });
});

const createUser = asyncWrapper(async(req,res) =>{
    const user = req.body;
    let hashedPassword = await hashPassword(user.password);
    user.password =  hashedPassword;
    await User.create(user); 
    res.status(201).json({user});
})

const getUser = asyncWrapper(async(req,res)=>{
    const {id: UserID} = req.params
    const user = await User.findOne({ _id : UserID })
    if(!user){
        res.send(`No User with id: ${id}`);
    }
    res.status(200).json({user});
})

const updateUser = asyncWrapper(async(req,res)=>{
    const {id: UserID} = req.params
    const user = await User.findOneAndUpdate({ _id: UserID}, req.body, {
        new: true, 
        runValidators: true,
    })
    if(!user){
        res.send(`No User with id: ${id}`);
    }
    res.status(200).json({user});
})

const deleteUser =  asyncWrapper(async(req,res)=>{
    const {id: UserID} = req.params
    const user = await User.findOneAndDelete({ _id: UserID});
    if(!user){
        res.send(`No User with id: ${id}`);
    }
    res.status(200).json({user});
})

module.exports = {
    getAllUser, 
    createUser,
    getUser,
    updateUser,
    deleteUser,
}