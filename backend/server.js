const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./database");
const userRoutes = require('./routes/userRoutes');
const echipaRoutes = require('./routes/echipaRoutes');
const proiectRoutes = require('./routes/proiectRoutes');
const livrabilRoutes = require('./routes/livrabilRoutes');
const permisiuneRoutes = require('./routes/permisiuniRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

app.use('/users', userRoutes);
app.use('/echipe', echipaRoutes);
app.use('/proiecte', proiectRoutes);
app.use('/livrabile', livrabilRoutes);
app.use('/permisiuni', permisiuneRoutes);

app.get("/", (req, res) => {
  res.send("Backend-ul functioneaza");
});

app.listen(port, () => {
  console.log(`Serverul ruleaza pe http://localhost:${port}`);
});



db.sync()
  .then(() => console.log("Modelele au fost sincronizate cu baza de date."))
  .catch(err => console.error("Eroare la sincronizare:", err));


