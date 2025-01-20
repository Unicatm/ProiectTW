const express = require("express");
const router = express.Router();
const {
  getAllNote,
  getNotaById,
  createNota,
  getNoteByIdLivrabil,
  updateNota,
} = require("../controllers/noteController");

router.get("/", getAllNote);
router.get("/note/:id", getNotaById);
router.post("/note", createNota);
router.put("/note/:id", updateNota);
router.get("/note/livrabil/:idLivrabil", getNoteByIdLivrabil);

module.exports = router;
