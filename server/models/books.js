const mongoose = require("mongoose");
   
    const booksSchema = new mongoose.Schema({
        
        user:{
            type:ObjectId,
            ref:"Users"
        },
        title:{
            type:String,

            required:true,
        },
        author:{
            type:String,
            required:true,

        },
        genre:{
            type:String,
            required:true
        },


    },{timestamps:true})


    module.exports = mongoose.model("Books",booksSchema)