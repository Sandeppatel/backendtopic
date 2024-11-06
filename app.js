// // const cookieParser = require("cookie-parser");
// // app.use(cookieParser());

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
// //   res.cookie("name", "sandeeppatel");
//   res.send("hello");
// });

// app.get("/read", (req, res) => {
//   res.send("read page");
// });

// app.listen(3000);
/*
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.get("/", (req, res) => {

  bcrypt.compare('pojajaja', '$2b$10$1hYE8.I0JsVhqhZEG5MuSenLr3mfIYvuYUQHgnEBczm8JUMao1W6G', function(err, result) {
    console.log(result);
    
});

});

app.listen(3000);
*/


 const express = require("express");
 const cookieParser = require("cookie-parser");
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");

 const app = express();
 app.use(cookieParser());

 app.get("/", (req, res) => {

  let token = jwt.sign({ email: "harsh@example.com" }, "secret");
  res.cookie("token", token, { httpOnly: true }); // Use httpOnly for security
  console.log(token);
  res.send("Token set in cookie");
  
 });

 app.get("/read", (req, res) => {

  const data = jwt.verify(req.cookies.token, "secret");
  console.log(data); 

 });

app.listen(3000);
