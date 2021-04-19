const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://catalina-admin:fliaJUchyWudg52g@cluster0.xttdr.mongodb.net/blogPostsDB")

app.use("/", require("./routes"))

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})

// //const express = require("express");

// //const mongoose = require("mongoose");
// const routes = require("./routes");
// //const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(__dirname, 'build', 'index.html'));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// const connection =  "mongodb+srv://catalina-admin:buzzy@cluster0.xttdr.mongodb.net/BlogDB";
// mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(() => console.log("Database Connected Successfully"))
//     .catch(err => console.log(err));
// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
