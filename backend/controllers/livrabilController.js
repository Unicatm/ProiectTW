const Livrabil = require('../models/Livrabil');

const getAllLivrabile = async (req, res) => {
    try {
        const livrabile = await Livrabil.findAll();
        res.json(livrabile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getLivrabilById = async (req, res) => {
    try {
        const livrabil = await Livrabil.findByPk(req.params.id);
        if (!livrabil) return res.status(404).json({ message: 'Livrabilul nu a fost găsit' });
        res.json(livrabil);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createLivrabil = async (req, res) => {
    try {
        const { titlu, descriere, link, data, idProiect } = req.body;
        const livrabil = await Livrabil.create({ titlu, descriere, link, data, idProiect });
        res.status(201).json(livrabil);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateLivrabil = async (req, res) => {
    try {
        const livrabil = await Livrabil.findByPk(req.params.id);
        if (!livrabil) return res.status(404).json({ message: 'Livrabilul nu a fost găsit' });

        await livrabil.update(req.body);
        res.json(livrabil);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteLivrabil = async (req, res) => {
    try {
        const livrabil = await Livrabil.findByPk(req.params.id);
        if (!livrabil) return res.status(404).json({ message: 'Livrabilul nu a fost găsit' });

        await livrabil.destroy();
        res.json({ message: 'Livrabilul a fost șters' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllLivrabile,
    getLivrabilById,
    createLivrabil,
    updateLivrabil,
    deleteLivrabil,
};
