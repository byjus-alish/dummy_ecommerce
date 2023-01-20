const User         = require('../models/user');
const asyncWrapper = require('../middleware/async')
const bcrypt       = require('bcrypt') 


const verifyPassword = async(password, hashedPassword) => {
    console.log(password);
    console.log(hashedPassword);
    let areTheyEqual = await bcrypt.compare(password,hashedPassword).then((res)=>
    {
        return res;
    }).catch(err => console.log(err));
    console.log(areTheyEqual);
    return areTheyEqual;
}


const loginUser = asyncWrapper(async(req,res)=>{

    const user     = await User.findOne({ email: req.body.email })
    const isPasswordCorrect = await verifyPassword(req.body.password,user.password);
    if(isPasswordCorrect){
        res.send({ user })
    }else{
        res.send({user: "not found"})
    }
})

module.exports = {loginUser}