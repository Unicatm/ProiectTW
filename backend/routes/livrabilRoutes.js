const express = require('express');
const router = express.Router();
const { getAllLivrabile, getLivrabilById, createLivrabil, updateLivrabil, deleteLivrabil } = require('../controllers/livrabilController');

router.get('/livrabile', getAllLivrabile);
router.get('/livrabile/:id', getLivrabilById);
router.post('/livrabile', createLivrabil);
router.put('/livrabile/:id', updateLivrabil);
router.delete('/livrabile/:id', deleteLivrabil);

module.exports = router;
