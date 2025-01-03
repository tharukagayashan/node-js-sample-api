const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bp = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const StudentRouter = require("./routes/student");

const app = express();

//Enable cors
app.use(cors());
app.use(bp.json());

const PORT = 5000;
const MONGO_DB = process.env.MONGO_URL;

mongoose.connect(MONGO_DB)
    .then(() => {
        console.log("DB Connected..");
    })
    .catch((e) => {
        console.log(e);
    })

app.use("/student", StudentRouter);

app.listen(PORT, () => {
    console.log(`App is running or port ${PORT}`);
})