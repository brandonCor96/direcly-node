const express = require("express");
const hbs = require("hbs");
const path = require("path");
const v1StudentRouter = require("./v1/routes/StudentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));
app.set("view options", { layout: "layouts/main" });

app.use(express.json());

// Serve static files from the public directory
app.use(express.static("src/public"));

//API path
app.use("/api/v1/students", v1StudentRouter);

//Creating Front pages
app.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});
app.get("/leads", (req, res) => {
  res.render("leads", { title: "Student Leads" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
