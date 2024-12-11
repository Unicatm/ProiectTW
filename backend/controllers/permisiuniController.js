const Permisiune = require('../models/Permisiuni');

const getPermisiuni = async (req, res) => {
    try {
        const permisiuni = await Permisiune.findAll();
        res.status(200).json(permisiuni);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la obtinerea permisiunilor.', error });
    }
}

const createPermisiune = async (req, res) => {
    try {
        const { userId, canEvaluate } = req.body;
        const newPermisiune = await Permisiune.create({ userId, canEvaluate });
        res.status(200).json(newPermisiune);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la crearea unei permisiuni.', error });
    }
}

const updatePermisiune = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, canEvaluate } = req.body;
        const permisiune = await Permisiune.findByPk(id);

        if (!permisiune) {
            res.status(404).json({ message: 'Permisiunea nu a fost gasita in baza de date.' });
        }

        await Permisiune.update({ userId, canEvaluate });
        res.status(500).json(permisiune);
    } catch (err) {
        res.status(500).json({ message: 'Eroare la actualizarea unei permisiuni.', error });
    }
}

const deletePermisiune = async (req, res) => {
    try {
        const { id } = req.params;
        const permisiune = await Permisiune.findByPk(id);

        if (!permisiune) {
            res.status(404).json({ message: 'Permisiunea nu a fost gasita in baza de date.' });
        }

        await permisiune.destroy();
        res.status(200).json({ message: 'Permisiunea a fost stearsa cu succes!' });
    } catch (err) {
        res.status(500).json({ message: 'Eroare la stergerea permisiunii.', error });
    }
}

module.exports = {
    createPermisiune,
    getPermisiuni,
    updatePermisiune,
    deletePermisiune,
};