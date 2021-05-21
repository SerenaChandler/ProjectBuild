const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
import mongoose from "mongoose";
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

const CONNECTION_URL = "CONNECTION URL FOR MONGO CLUSTER GOES HERE";


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);