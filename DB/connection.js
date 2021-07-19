const mongoose = require("mongoose");
const url = "mongodb+srv://abdulhakim:seattle1@cluster0.uh7cw.mongodb.net/test";
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};
const connectDB = async ()=> {
  await mongoose.connect(url, connectionParams);
  console.log("ДБ СВЯЗАНО ГОСПОДИН");
};
module.exports = connectDB;
