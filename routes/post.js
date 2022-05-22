const router = require("express").Router();
const controller = require('../controller/postController');

router.get('/',controller.all);
router.post('/',controller.post)

router.route('/:id')
        .get(controller.onePost)
        .patch(controller.patch)
        .delete(controller.drop);


module.exports = router;
