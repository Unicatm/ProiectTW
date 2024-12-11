const express = require('express');
const { getEchipe, createEchipa, updateEchipa, deleteEchipa } = require('../controllers/echipaController');

const router = express.Router();



router.post('/', createEchipa);
router.get('/', getEchipe);

router.put('/:id', updateEchipa);
router.delete('/:id', deleteEchipa);

module.exports = router;
