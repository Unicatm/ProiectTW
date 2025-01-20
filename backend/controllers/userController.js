const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createUser = async (req, res) => {
    const { nume, email, parola, rol } = req.body;
    try {
        const newUser = await User.create({ nume, email, parola, rol });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    getAllUsers,
    createUser,
};
