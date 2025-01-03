const Proiect = require('../models/Proiect');

const getAllProiecte = async (req, res) => {
    try {
        const proiecte = await Proiect.findAll();
        res.json(proiecte);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProiectById = async (req, res) => {
    try {
        const proiect = await Proiect.findByPk(req.params.id);
        if (!proiect) return res.status(404).json({ message: 'Proiectul nu a fost găsit' });
        res.json(proiect);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProiect = async (req, res) => {
    try {
        const { titlu, descriere, idEchipa } = req.body;
        const proiect = await Proiect.create({ titlu, descriere, idEchipa });
        res.status(201).json(proiect);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProiect = async (req, res) => {
    try {
        const proiect = await Proiect.findByPk(req.params.id);
        if (!proiect) return res.status(404).json({ message: 'Proiectul nu a fost găsit' });

        await proiect.update(req.body);
        res.json(proiect);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProiect = async (req, res) => {
    try {
        const proiect = await Proiect.findByPk(req.params.id);
        if (!proiect) return res.status(404).json({ message: 'Proiectul nu a fost găsit' });

        await proiect.destroy();
        res.json({ message: 'Proiectul a fost șters' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProiecte,
    getProiectById,
    createProiect,
    updateProiect,
    deleteProiect,
};