const User = require("../models/User");
const { use } = require("../routes/userRoutes");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByIdEchipa = async (req, res) => {
  try {
    const { idEchipa } = req.params;
    const useri = await User.findAll({
      where: {
        idEchipa: idEchipa,
      },
    });

    res.json(useri);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsersIdByWithoutEchipa = async (req, res) => {
  try {
    const useri = await User.findAll({
      where: {
        idEchipa: null,
      },
    });
    console.log(await User.findAll());
console.log(await User.findAll({ where: { idEchipa: null } }));

    res.json(useri);
  } catch (err) {
    res.status(500).json({ error: err.message });
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

const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
  getUserByIdEchipa,
  getUsersIdByWithoutEchipa,
};
