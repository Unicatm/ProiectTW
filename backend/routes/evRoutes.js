const express = require("express");
const router = express.Router();
const {
  createEvaluare,
  getAllEvaluari,
  getEvaluareById,
  deleteEvaluare,
  updateEvaluare,
} = require("../controllers/evController");

router.post("/ev", createEvaluare);
router.get("/ev", getAllEvaluari);
router.get("/ev/:id", getEvaluareById);
router.delete("/ev/:id", deleteEvaluare);
router.put("/ev/:id", updateEvaluare);

module.exports = router;
