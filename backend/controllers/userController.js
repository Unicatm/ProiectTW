const User = require('../models/User');


const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la obținerea utilizatorilor', error });
    }
};

const createUser = async (req, res) => {
    try {
        const { nume, email, password, rol } = req.body;
        const newUser = await User.create({ nume, email, password, rol });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la crearea utilizatorului', error });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nume, email, password, rol } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Utilizatorul nu a fost găsit.' });
        }

        await user.update({ nume, email, password, rol });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Eroare la actualizarea utilizatorului.', error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Utilizatorul nu a fost găsit.' });
        }

        await user.destroy();
        res.status(200).json({ message: 'Utilizatorul a fost șters cu succes.' });
    } catch (error) {
        res.status(500).json({ message: 'Eroare la ștergerea utilizatorului.', error });
    }
};



module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
};