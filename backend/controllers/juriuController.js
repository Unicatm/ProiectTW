const Juriu = require('../models/Juriu');

const getAllJurii = async (req, res) => {
    try {
        const jurii = await Juriu.findAll();
        res.json(jurii);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createJuriu = async (req, res) => {
    try {
        const { idJuriu } = req.body;
        const juriu = await Juriu.create({ idJuriu });
        res.status(201).json(juriu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllJurii,
    createJuriu,
};