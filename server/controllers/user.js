const User = require("../models/user")

const { hashPassword, comparePassword } = require('../utils/auth')
const jwt = require('jsonwebtoken')
const register = async (req, res) => {
    const {  email, password, role ,username} = req.body;


    try {
        const existUser = await User.findOne({ email });
        if (existUser) return res.status(400).send("Email is already taken!");
        const hashedPassword = await hashPassword(password);
        const user = new User({
            email,
            password: hashedPassword,
            role,
            username
        })
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        console.log(error)
        res.status(500).send("Server error");
    }
}

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send("Email or password incorrect");
      }
  
      const matchPassword = await comparePassword(password, user.password);
      if (!matchPassword) {
        return res.status(400).send("Email or password incorrect");
      }
  
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
  
      user.password = undefined;
      res.status(200).json({ ...user._doc, token });
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }


  const getLoggedInUser = async (req, res) => {
    try {
      const token = req.headers.authorization;
  
      if (!token) {
        return res.status(403).json({ message: "Authorization header missing or empty" });
      }
  
      const decodedUserToken = jwt.verify(token, process.env.JWT_SECRET);
  
      const user = await User.findById(decodedUserToken._id).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      return res.json(user);
    } catch (err) {
      if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ message: "Invalid token" });
      }
      res.status(500).send("Server error, couldn't get user");
    }
  };
  
module.exports = {
    register,
    login,
    getLoggedInUser
}