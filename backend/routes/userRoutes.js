const express = require("express");
const {
  getAllUsers,
  createUser,
  updateUser,
  getUserById,
  getUserByIdEchipa,
  getUsersIdByWithoutEchipa,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/faraEchipa", getUsersIdByWithoutEchipa); // Mutată înainte de /:id
router.get("/echipa/:idEchipa", getUserByIdEchipa);
router.get("/:id", getUserById); // Ruta pentru ID trebuie să fie ultima pentru a evita conflicte
router.put("/:id", updateUser);

module.exports = router;
