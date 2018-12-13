const express = require('express');
const router = express.Router();
const ctrl = require('../controller/')

router.post('/register', ctrl.users.registerAction)
router.get('/getVCode', ctrl.users.getVCodeAction)
router.get('/checkUsername/:username', ctrl.users.checkUsernameAction)
router.post('/login', ctrl.users.loginAction)
router.get('/getUserInfo', ctrl.users.getUserInfoAction)
router.post('/updateUserInfo', ctrl.users.updateUserInfoAction)
router.post('/updatePassword', ctrl.users.updatePasswordAction)
router.get('/getReceiverAddress', ctrl.users.getReceiverAddressAction)
router.get('/deleteReceiverAddress/:id', ctrl.users.deleteReceiverAddressAction)
router.post('/addReceiverAddress', ctrl.users.addReceiverAddressAction)
router.post('/updateReceiverAddress/:id', ctrl.users.updateReceiverAddressAction)

module.exports = router;
