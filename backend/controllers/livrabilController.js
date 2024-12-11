const Livrabil = require('../models/Livrabil');

const getLivrabile = async (req, res) => {
    try {
        const livrabile = await Livrabil.findAll();
        res.status(200).json(livrabile);
    } catch (error) {
        req.status(500).json({ message: 'Eroare la obtinerea livrabilelor.', error });
    }
}

const createLivrabil = async (req, res) => {
    try {
        const { idEchipa, titlu, descriere, linkVideo, data } = req.body;
        const newLivrabil = await Livrabil.create({ idEchipa, titlu, descriere, linkVideo, data });
        res.status(200).json(newLivrabil);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la crearea livrabilului.', error });
    }
}

const updateLivrabil = async (req, res) => {
    try {
        const { id } = req.params;
        const { idEchipa, titlu, descriere, linkVideo, data } = req.body;
        const livrabil = await Livrabil.findByPk(id);
        if (!livrabil) {
            return res.status(404).json({ message: 'Livrabilul nu a fost gasit!' });
        }

        await Livrabil.update({ idEchipa, titlu, descriere, linkVideo, data });
        res.status(200).json(livrabil);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la actualizarea livrabilului', error });
    }

}

const deleteLivrabil = async (req, res) => {
    try {
        const { id } = req.params;
        const livrabil = await Livrabil.findByPk(id);
        if (!livrabil) {
            return res.status(404).json({ message: 'Livrabilul nu a fost gasit!' });
        }

        await livrabil.destroy();
        res.status(200).json({ message: 'Livrabilul a fost sters din baza de date!' });
    } catch (error) {
        res.status(500).json({ message: 'Eroare la stergerea livrabilului', error });
    }
}

module.exports = {
    createLivrabil,
    getLivrabile,
    updateLivrabil,
    deleteLivrabil,
};