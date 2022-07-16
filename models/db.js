const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://<pratiksha Kadam>:<QM4kQRSrS833eMf>@cluster0.pvupq.mongodb.net/?retryWrites=true&w=majority://Usercontactsdb:UserContact@123@cluster0.9cevj..net/UserContactdb",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

require("./usermodel.js");
