const express = require('express');
const router = express.Router();
const { getAllJurii, createJuriu } = require('../controllers/juriuController');

router.get('/jurii', getAllJurii);
router.post('/jurii', createJuriu);

module.exports = router;
