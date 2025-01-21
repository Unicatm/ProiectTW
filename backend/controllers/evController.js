const Evaluare = require("../models/Evaluare");
const User = require("../models/User");
const Echipa = require("../models/Echipa");

// Creează o nouă evaluare (asociază un utilizator cu o echipă evaluată)
const createEvaluare = async (req, res) => {
  const { idUser, idEchipaEvaluata } = req.body;

  try {
    // Verifică dacă utilizatorul există
    const user = await User.findByPk(idUser);
    if (!user) {
      return res.status(404).json({ message: "Utilizatorul nu există." });
    }

    // Verifică dacă echipa evaluată există
    const echipa = await Echipa.findByPk(idEchipaEvaluata);
    if (!echipa) {
      return res.status(404).json({ message: "Echipa evaluată nu există." });
    }

    // Creează evaluarea
    const evaluare = await Evaluare.create({ idUser, idEchipaEvaluata });
    res.status(201).json({ message: "Evaluarea a fost creată cu succes.", evaluare });
  } catch (error) {
    console.error("Eroare la crearea evaluării:", error);
    res.status(500).json({ message: "Eroare la crearea evaluării." });
  }
};

// Obține toate evaluările
const getAllEvaluari = async (req, res) => {
  try {
    const evaluari = await Evaluare.findAll({
      include: [
        { model: User, as: "utilizator" },
        { model: Echipa, as: "echipaEvaluata" },
      ],
    });
    res.json(evaluari);
  } catch (error) {
    console.error("Eroare la obținerea evaluărilor:", error);
    res.status(500).json({ message: "Eroare la obținerea evaluărilor." });
  }
};

// Obține o evaluare după ID
const getEvaluareById = async (req, res) => {
  const { id } = req.params;

  try {
    const evaluare = await Evaluare.findByPk(id, {
      include: [
        { model: User, as: "utilizator" },
        { model: Echipa, as: "echipaEvaluata" },
      ],
    });
    if (!evaluare) {
      return res.status(404).json({ message: "Evaluarea nu există." });
    }
    res.json(evaluare);
  } catch (error) {
    console.error("Eroare la obținerea evaluării:", error);
    res.status(500).json({ message: "Eroare la obținerea evaluării." });
  }
};

// Șterge o evaluare după ID
const deleteEvaluare = async (req, res) => {
  const { id } = req.params;

  try {
    const evaluare = await Evaluare.findByPk(id);
    if (!evaluare) {
      return res.status(404).json({ message: "Evaluarea nu există." });
    }

    await evaluare.destroy();
    res.json({ message: "Evaluarea a fost ștearsă cu succes." });
  } catch (error) {
    console.error("Eroare la ștergerea evaluării:", error);
    res.status(500).json({ message: "Eroare la ștergerea evaluării." });
  }
};

// Actualizează o evaluare (opțional, în caz că ai nevoie de acest endpoint)
const updateEvaluare = async (req, res) => {
  const { id } = req.params;
  const { idUser, idEchipaEvaluata } = req.body;

  try {
    const evaluare = await Evaluare.findByPk(id);
    if (!evaluare) {
      return res.status(404).json({ message: "Evaluarea nu există." });
    }

    if (idUser) evaluare.idUser = idUser;
    if (idEchipaEvaluata) evaluare.idEchipaEvaluata = idEchipaEvaluata;

    await evaluare.save();
    res.json({ message: "Evaluarea a fost actualizată cu succes.", evaluare });
  } catch (error) {
    console.error("Eroare la actualizarea evaluării:", error);
    res.status(500).json({ message: "Eroare la actualizarea evaluării." });
  }
};

module.exports = {
  createEvaluare,
  getAllEvaluari,
  getEvaluareById,
  deleteEvaluare,
  updateEvaluare,
};
