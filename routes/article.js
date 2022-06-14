const router = require('express').Router();
const controller = require('../controller/articleController');

router.get('/',controller.all);
router.post('/',controller.add);

module.exports = router;