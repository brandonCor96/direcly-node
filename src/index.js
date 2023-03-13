const express = require("express");
const hbs = require("hbs");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const v1StudentRouter = require("./v1/routes/StudentRoutes");
const authMiddleware = require("./middleware/basicAuth");

const app = express();

//Define .env directory
dotenv.config({
  path: path.resolve(__dirname, './.env')
});
const PORT = process.env.PORT || 3000;


app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));
app.set("view options", { layout: "layouts/main" });

app.use(express.json());

// Serve static files from the public directory
app.use(express.static("src/public"));

//Mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

//API path
app.use("/api/v1/students", v1StudentRouter);

//Creating Front pages
app.get("/register", authMiddleware, (req, res) => {
  res.render("register", { title: "Register" });
});
app.get("/leads", (req, res) => {
  res.render("leads", { title: "Student Leads" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});