const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

// Initialize middleware
// we use to have to install body parser but it is a built in middleware
// fiunctiion of express. It parses incoming JSON playload
app.use(express.json({ extended: false }));

// just a test route for now
app.get("/", (req, res) => res.send("Hello World"));
app.post("/", (req, res) => res.send(`Hello ${req.body.name}`));

app.listen(8000, () => console.log(`Server started at port ${PORT}`));
