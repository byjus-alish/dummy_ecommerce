const mongoose = require('mongoose');


let validateEmail = (email) => {
    let regular_expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regular_expression.test(email)
}
const UserSchema = new mongoose.Schema({
    first_name: {
        type:     String, 
        required: [true, 'first name is required'],
    },
    last_name: {
        type:     String, 
        required: [true, 'last name is required']
    },
    email:{
        type:      String,
        trim:      true, 
        lowercase: true,
        unique:    true,
        required:  true,
        validate:  [validateEmail, 'Provide the valid email address']
    },
    password: {
        type: String
    },
    updated: {
        type: Date,
        default: Date.now
    },
    created: {
        type:    Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema)