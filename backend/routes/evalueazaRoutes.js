const express = require('express');
const router = express.Router();
const EvaluareController = require('../controllers/evaluareController');

router.post('/evalueaza', EvaluareController.evalueazaProiect);

module.exports = router;
