const express = require("express");
const router = express.Router();
const Echipa = require("../models/Echipa");
const User = require("../models/User");
const {
  getAllEchipe,
  getEchipaById,
  createEchipa,
  updateEchipa,
  deleteEchipa,
} = require("../controllers/echipaController");

router.get("/", getAllEchipe);
router.get("/:id", getEchipaById);
router.post("/", createEchipa);
router.put("/:id", updateEchipa);
router.delete("/:id", deleteEchipa);
router.post("/creareEchipa", async (req, res) => {
    const { numeEchipa, membriEchipa } = req.body;
  
    try {

      const echipa = await Echipa.create({ nume: numeEchipa });
      const { idEchipa } = echipa;
  
      
      await User.update(
        { idEchipa },
        { where: { email: membriEchipa } } 
      );
  
      res.status(201).json({
        message: "Echipa a fost creată cu succes și utilizatorii au fost actualizați.",
        echipa,
      });
    } catch (error) {
      console.error("Eroare la crearea echipei:", error);
      res.status(500).json({ message: "Eroare la crearea echipei.", error });
    }
  });

module.exports = router;
