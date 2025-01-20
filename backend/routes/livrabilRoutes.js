const express = require("express");
const router = express.Router();
const {
  getAllLivrabileByIdProiect,
  getAllLivrabile,
  getLivrabilById,
  createLivrabil,
  updateLivrabil,
  deleteLivrabil,
} = require("../controllers/livrabilController");

router.get("/", getAllLivrabile);
router.get("/livrabile/:id", getLivrabilById);
router.post("/livrabile", createLivrabil);
router.put("/livrabile/:id", updateLivrabil);
router.delete("/livrabile/:id", deleteLivrabil);
router.get("/proiect/:idProiect", getAllLivrabileByIdProiect);

module.exports = router;
