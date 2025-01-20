const express = require('express');
const router = express.Router();
const { getAllInvitatii, createInvitatie } = require('../controllers/invitatiiController');

router.get('/invitatii', getAllInvitatii);
router.post('/invitatii', createInvitatie);

module.exports = router;
