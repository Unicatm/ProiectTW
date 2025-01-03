const Invitatii = require('../models/Invitatii');

const getAllInvitatii = async (req, res) => {
    try {
        const invitatii = await Invitatii.findAll();
        res.json(invitatii);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createInvitatie = async (req, res) => {
    try {
        const { idEchipa, idUser, status } = req.body;
        const invitatie = await Invitatii.create({ idEchipa, idUser, status });
        res.status(201).json(invitatie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllInvitatii,
    createInvitatie,
};
