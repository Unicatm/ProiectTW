const Echipa = require("../models/Echipa");

const getAllEchipe = async (req, res) => {
  try {
    const echipe = await Echipa.findAll();
    res.json(echipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEchipaById = async (req, res) => {
  try {
    const echipa = await Echipa.findByPk(req.params.id);
    if (!echipa)
      return res.status(404).json({ message: "Echipa nu a fost găsită" });
    res.json(echipa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEchipa = async (req, res) => {
  try {
    const echipa = await Echipa.create(req.body);
    res.status(201).json(echipa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEchipa = async (req, res) => {
  try {
    const [updated] = await Echipa.update(req.body, {
      where: { idEchipa: req.params.id },
    });
    if (!updated)
      return res.status(404).json({ message: "Echipa nu a fost găsită" });
    res.json({ message: "Echipa a fost actualizată" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEchipa = async (req, res) => {
  try {
    const deleted = await Echipa.destroy({
      where: { idEchipa: req.params.id },
    });
    if (!deleted)
      return res.status(404).json({ message: "Echipa nu a fost găsită" });
    res.json({ message: "Echipa a fost ștearsă" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEchipe,
  getEchipaById,
  createEchipa,
  updateEchipa,
  deleteEchipa,
};
