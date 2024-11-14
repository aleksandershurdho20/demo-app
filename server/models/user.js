const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
   
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 8
    },

    faceDescriptor: {
         type: Array,
        
    },
    
},
    { timestamps: true }
)

module.exports = mongoose.model("Users", userSchema)