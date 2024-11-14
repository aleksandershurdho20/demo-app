const express = require('express')
const app = express();
require("dotenv").config();
const Database = require('./config/Database')
const { readdirSync } = require("fs")
const cors = require("cors");
const bodyParser = require('body-parser');
const { initializeFaceApi } = require('./utils/faceAuth');
initializeFaceApi()
Database()
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
readdirSync("./routes").map((route) =>
    app.use("/api", require(`./routes/${route}`))
);


app.get("/",(req,res) => {
    res.json({message:" Hello world"})
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('running on ', PORT)
})