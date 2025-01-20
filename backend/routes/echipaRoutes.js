const express = require('express');
const router = express.Router();
const { getAllEchipe, getEchipaById, createEchipa, updateEchipa, deleteEchipa } = require("../controllers/echipaController");

router.get('/', getAllEchipe);
router.get('/:id', getEchipaById);
router.post('/', createEchipa);
router.put('/:id', updateEchipa);
router.delete('/:id', deleteEchipa);

module.exports = router;
