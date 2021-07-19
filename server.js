const express = require("express");
const path = require ("path");
const connectDB = require("./DB/connection");
const PorturModel = require('./DB/portur');
const TurporModel = require('./DB/turpor');
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/assets", express.static("static"));


app.get("/turpor", function(req, res){
    res.render("turpor");
});
app.post("/turpor", function(req, res){
  TurporModel.create(req.body).then(function(){
    res.render("turpor");
  });
});


app.get("/turpor2", function(req, res){
    res.render("turpor2");
});
app.post("/turpor2", function(req, res){
  TurporModel.create(req.body).then(function(){
    res.render("turpor2");
  });
});

app.get("/turpor3", function(req, res){
    res.render("turpor3");
});
app.post("/turpor3", function(req, res){
  TurporModel.create(req.body).then(function(){
    res.render("turpor3");
  });
});

app.get("/portur", function(req, res){
    res.render("portur");
});
app.post("/portur", function(req, res){
  PorturModel.create(req.body).then(function(){
    res.render("portur");
  });
});
app.get("/portur2", function(req, res){
    res.render("portur2");
});
app.post("/portur2", function(req, res){
  PorturModel.create(req.body).then(function(){
    res.render("portur2");
  });
});
app.get("/portur3", function(req, res){
    res.render("portur3");
});
app.post("/portur3", function(req, res){
  PorturModel.create(req.body).then(function(){
    res.render("portur3");
  });
});


app.get("/", function(req, res){
    res.render("index");
});
app.post("/", function(req, res){
  const wordy = req.body.input1;
  const wordx = new RegExp(["^", wordy, "$"].join(""), "i"); /*Case insensitive search. Thats why here its wordy and wordx*/
    TurporModel.findOne({"input1": wordx}).then(function(records){
      if (records === null) {
        PorturModel.findOne({"input1": wordx}).then(function(records){
          if (records === null) {
            res.render("error", {wordy}); /*here it is not wordx, because wordx has special characters surrounding it*/
          } else {
            res.render("index2", {records, wordy});/*Wordy is used for exporting back and selecting input value*/
          };
        });
      } else {
        res.render("index2", {records, wordy}); /*Wordy is used for exporting back and selecting input value*/
      };
    });
});





const server = app.listen(process.env.PORT || 5000);
const portNumber = server.address().port;
console.log("ГОСПОДИН ПОРТ СЕИЧАС ОТКРЫТ " + portNumber);
