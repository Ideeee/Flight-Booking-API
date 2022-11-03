const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const {models} = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());
app.use(express.urlencoded({extended:true}))
app.use("/", routes);

const port = process.env.PORT || 2021;

app.listen(port, 'localhost', () => {
  console.log(`Server is running on port ${port}`);
});
