const express = require('express');
const router = express.Router();
const { getAllProiecte, getProiectById, createProiect, updateProiect, deleteProiect } = require("../controllers/proiectController");

router.get('/proiecte', getAllProiecte);
router.get('/proiecte/:id', getProiectById);
router.post('/proiecte', createProiect);
router.put('/proiecte/:id', updateProiect);
router.delete('/proiecte/:id', deleteProiect);

module.exports = router;
