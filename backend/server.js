const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const notRoute = require("./routes/notlar");

const app = express();

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/notlar", notRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Veritabanı bağlandı");
    app.listen(process.env.PORT, () => {
      console.log(`${process.env.PORT} port dinleniyor`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/notlar", notRoute);
