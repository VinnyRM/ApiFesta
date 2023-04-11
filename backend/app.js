const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
const app = express();
dotenv.config({path: '../.env'});

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

//DB Connection
mongoose.connect(process.env.MONGO).then(() => {
    console.log("Conectado ao banco de dados MongoDB");
}).catch((err) => console.log(err));

//Routes
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3000, function() {
    console.log("Servidor online.");
});