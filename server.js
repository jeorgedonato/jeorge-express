//Requiring dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const compression = require("compression");
const helmet = require("helmet");

//Declaring Port
const app = express();
const PORT = process.env.PORT || 8080;

//Using handlebars as views
app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(helmet());

// Static directory
app.use(express.static("public"));

//Declaring Routes
require("./controller/htmlController")(app);

//Listening to the port
app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
