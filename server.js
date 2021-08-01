const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 5000;
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));

app.use(express.json()); 

app.use(cors());

//MONGODB ATLAS CONNECTION STRING
mongoose.connect("mongodb+srv://catalina-admin:fliaJUchyWudg52g@cluster0.xttdr.mongodb.net/blogPostsDB");

app.use(routes);

//IF THE APP IS IN PRODUCTION MODE 
if(process.env.NODE_ENV === 'production') {

    //USE THE STATIC FILES LOCATED IN THE BUILD FOLDER
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    });

};

app.listen(port, function() {

    console.log("express server is running")

});