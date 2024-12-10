const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./database");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Backend-ul functioneaza");
});

app.listen(port, () => {
  console.log(`Serverul ruleaza pe http://localhost:${port}`);
});

db.getConnection().then(conn => {
  console.log("Conexiune reusita!");
  conn.release();
}).catch(err => {
  console.error("Eroare la conexiune: ", err);
})
