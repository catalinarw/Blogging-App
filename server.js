const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")
const port = process.env.PORT || 5000
const routes = require("./routes")
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


app.use(cors());

mongoose.connect("mongodb+srv://catalina-admin:fliaJUchyWudg52g@cluster0.xttdr.mongodb.net/blogPostsDB")

app.use(routes)
//if the app is in Production mode use the 
// //static files located in the build folder
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, function() {
    console.log("express server is running")
})