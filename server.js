const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// MongoDB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB with mongoose
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Main route
app.get("/", (req, res) => res.send("Hello"));

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// Sets up port for heroku later || 5000 for local dev now
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
