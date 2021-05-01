
require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cityRouter = require("./routes/city");
const cors = require("cors");
const path = require("path");
const flightRouter = require("./routes/flight");
const userRoutes = require("./routes/users");
const uploadRouter = require("./routes/file-upload");
const sendEmail = require("./routes/email");
const checkoutPayment = require("./routes/payment");
const itineraryRouter = require("./routes/itinerary");
const trim = require("./middleware/trim");

//Added mongoose to help connect with our Mongodb database
const mongoose = require("mongoose");
const { json, urlencoded } = express;
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(trim);
app.use(cookieParser());
app.use('static', express.static(path.join(__dirname, 'client/build')));

app.use("/api/users", userRoutes);
app.use("/api/flights", flightRouter);
app.use("/api/cities", cityRouter);
app.use("/api/email", sendEmail);
app.use("/api", uploadRouter);
app.use("/api/checkout", checkoutPayment);
app.use("/api/itinerary", itineraryRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  });
}

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({ error: err });
});

const url = process.env.MONGO_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Express SERVER listening on port ${process.env.PORT} `);
});

module.exports = app;