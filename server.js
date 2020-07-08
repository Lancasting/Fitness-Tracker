const express = require("express");
const mongoose = require("mongoose");

const MONGO_URI = "mongodb://<fitness1>:<fitnesspass1>@ds153719.mlab.com:53719/heroku_nfg918z4"

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.use(require("./routes/views.js"));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});