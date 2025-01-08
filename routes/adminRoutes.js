const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// Route to create a user
router.post('/createUser', adminController.createUser);

module.exports = router;
