const router = require('express').Router();
const controller  = require('../controller/tagController');
const {imageUpload} = require('../utilies/gallery');
const {validateToken,validateBody} = require('../utilies/validator');
const {TagSchema} = require('../utilies/schema');


router.get('/',controller.all);
router.post('/',[validateToken,imageUpload,validateBody(TagSchema.add),controller.post]);

// router.route(':/id')
// .get(controller.Onetag)
// .patch(controller.EditTag)
// .delete(controller.DeleteTag)

router.route('/:id')
        .get(controller.Onetag)
        .patch(validateToken,controller.EditTag)
        .delete(validateToken,controller.DeleteTag);

module.exports = router;