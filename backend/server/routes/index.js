const router = require('express').Router();
const controller = require('../controllers/');

router.post('/', controller.sendMessage);

module.exports = router;
