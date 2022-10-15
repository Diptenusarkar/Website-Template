//declaration
var express = require("express");
var expressSession = require("express-session");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;

//common controllers
var signup = require("./controllers/signup");
var login = require("./controllers/login");
var logout = require("./controllers/logout");

//admin controllers
var admin = require("./controllers/admin");

//customer controllers
var customer = require("./controllers/customer");

//configure
app.set("view engine", "ejs");

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  expressSession({
    secret: "my top secret pass",
    resave: false,
    saveUninitialized: true,
  })
);
app.use("/css", express.static(__dirname + "/css"));
app.use("/images", express.static(__dirname + "/images"));

app.use("*", function (req, res, next) {
  if (req.originalUrl == "/login" || req.originalUrl == "/signup") {
    next();
  } else {
    if (!req.session.admin && !req.session.customer) {
      res.redirect("/login");
      return;
    }
    next();
  }
});

//routes
app.use("/login", login);
app.use("/signup", signup);
app.use("/logout", logout);

//admin routes
app.use("/admin", admin);

//customer routes

app.use("/customer", customer);

//server start
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
