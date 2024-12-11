const express = require('express');
const { createProiect, getProiecte, updateProiect, deleteProiect } = require('../controllers/proiectController');

const router = express.Router();

router.post('/', createProiect);
router.get('/', getProiecte);
router.put('/:id', updateProiect);
router.delete('/:id', deleteProiect);

module.exports = router;