const Note = require("../models/Note");

const getAllNote = async (req, res) => {
  try {
    const note = await Note.findAll();
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNotaById = async (req, res) => {
  try {
    const nota = await Nota.findByPk(req.params.id);
    if (!nota)
      return res.status(404).json({ message: "Nota nu a fost gasita" });
    res.json(nota);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNota = async (req, res) => {
  try {
    const { idUser, nota, idLivrabil } = req.body;
    const grade = await Note.create({ idUser, nota, idLivrabil });
    res.status(201).json(grade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNoteByIdLivrabil = async (req, res) => {
  try {
    const { idLivrabil } = req.params;
    const note = await Note.findAll({
      where: {
        idLivrabil: idLivrabil,
      },
    });

    if (!note || note.length === 0) {
      return res
        .status(404)
        .json({ message: "Nu au fost gasite note pentru acest livrabil" });
    }

    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNota = async (req, res) => {
  try {
    const nota = await Nota.findByPk(req.params.id);
    if (!nota)
      return res
        .status(404)
        .json({ message: "nu exista acea nota pt a putea fi modificata" });
    await nota.update(req.body);
    res.json(nota);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getAllNote,
    getNotaById,
    getNoteByIdLivrabil,
    createNota,
    updateNota
}
