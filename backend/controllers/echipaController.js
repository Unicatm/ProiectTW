const Echipa = require('../models/Echipa');

const getEchipe = async (req, res) => {
    try {
        const echipe = await Echipa.findAll();
        res.status(200).json(echipe);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la obtinerea echipelor', error });
    }
};

const createEchipa = async (req, res) => {
    try {
        const { nume, idUser } = req.body;
        const newEchipa = await Echipa.create({ nume, idUser });
        res.status(200).json(newEchipa);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la crearea echipei.', error });
    }
};

const updateEchipa = async (req, res) => {
    try {
        const { id } = req.params;
        const { nume, idUser } = req.body;

        const echipa = await Echipa.findByPk(id);
        if (!echipa) {
            return res.status(404).json({ message: 'Echipa nu a fost gasita' });
        }

        await echipa.update({ nume, idUser });
        res.status(200).json(echipa);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la actualizarea echipei', error });
    }
};

const deleteEchipa = async (req, res) => {
    try {
        const { id } = req.params;
        const echipa = await Echipa.findByPk(id);

        if (!echipa) {
            res.status(404).json({ message: 'Echipa nu a fost gasita' });
        }

        await echipa.destroy();
        res.status(200).json({ message: 'Echipa a fost stearsa cu succes!' });
    } catch (error) {
        res.status(500).json({ message: 'Eroare la stergerea echipei', error });
    }
}

module.exports = {
    createEchipa,
    getEchipe,
    updateEchipa,
    deleteEchipa,
};