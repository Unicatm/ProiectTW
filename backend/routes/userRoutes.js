const express = require('express');
const { getAllUsers, createUser } = require('../controllers/userController');

const router = express.Router();



router.post('/', createUser);
router.get('/', getAllUsers);


module.exports = router;
