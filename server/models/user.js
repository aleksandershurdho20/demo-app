const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
   
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    
},
    { timestamps: true }
)

module.exports = mongoose.model("Users", userSchema)