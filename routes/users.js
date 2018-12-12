const express = require('express');
const router = express.Router();
const ctrl = require('../controller/')

router.post('/register', ctrl.users.registerAction)
router.get('/getVCode', ctrl.users.vCodeAction)

module.exports = router;
