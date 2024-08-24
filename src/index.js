const express = require("express");
const path = require("path");
const app = express();

const staticPath = path.join(__dirname);

app.use(express.static(staticPath));

// Routes
app.get("/", (req, res) => {
    //res.sendFile(express.static(staticPath,"index.html"));
});

app.get("/about", (req, res) => {
    res.send("<h3>About-Page</h3>");
});

app.get("/temp", (req, res) => {
    res.send("<h1>This is the temperature</h1>");
});

// Start the server
app.listen(8000, "127.0.0.1", () => {
    console.log("Running on port 8000");
});
