const Proiect = require('../models/Proiect');

const getProiecte = async (req, res) => {
    try {
        const proiecte = await Proiect.findAll();
        res.status(200).json(proiecte);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la obtinerea proiectelor', error });
    }
};

const createProiect = async (req, res) => {
    try {
        const { titlu, descriere, idEchipa } = req.body;
        const newProiect = await Proiect.create({ titlu, descriere, idEchipa });
        res.status(200).json(newProiect);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la crearea proiectului.', error });
    }
};

const updateProiect = async (req, res) => {
    try {
        const { id } = req.params;
        const { titlu, descriere, idEchipa } = req.body;

        const proiect = await Proiect.findByPk(id);
        if (!proiect) {
            return res.status(404).json({ message: 'Proiectul nu a fost gasit' });
        }

        await proiect.update({ titlu, descriere, idEchipa });
        res.status(200).json(proiect);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la actualizarea proiectului', error });
    }
};

const deleteProiect = async (req, res) => {
    try {
        const { id } = req.params;
        const proiect = await Proiect.findByPk(id);

        if (!proiect) {
            res.status(404).json({ message: 'Proiectul nu a fost gasit' });
        }

        await proiect.destroy();
        res.status(200).json({ message: 'Proiectul a fost sters cu succes!' });
    } catch (error) {
        res.status(500).json({ message: 'Eroare la stergerea proiectului', error });
    }
}

module.exports = {
    createProiect,
    getProiecte,
    updateProiect,
    deleteProiect,
};