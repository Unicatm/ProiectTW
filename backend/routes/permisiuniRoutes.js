const express = require('express');
const { createPermisiune, getPermisiuni, updatePermisiune, deletePermisiune } = require('../controllers/permisiuniController');

const router = express.Router();

router.post('/', createPermisiune);
router.get('/', getPermisiuni);
router.put('/:id', updatePermisiune);
router.delete('/:id', deletePermisiune);

module.exports = router;