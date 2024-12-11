const express = require('express');
const { getLivrabile, createLivrabil, updateLivrabil, deleteLivrabil } = require('../controllers/livrabilController');

const router = express.Router();

router.post('/', createLivrabil);
router.get('/', getLivrabile);

router.put('/:id', updateLivrabil);
router.delete('/:id', deleteLivrabil);

module.exports = router;