const router = require("express").Router();
const controller = require('../controller/postController');
const {validateToken,validateBody,validateParam} = require('../utilies/validator');
const {PostSchema,AllSchema} = require('../utilies/schema');
const {imageUpload} = require('../utilies/gallery')

router.get('/',controller.all);
router.post('/',[validateToken,imageUpload,validateBody(PostSchema),controller.post]);

router.get('/bycat/:id',controller.catById);

router.get('/byUser/:id',controller.userById);
router.get('/ByTag/:id',controller.postByTag);
router.get('/page/:page',validateParam(AllSchema.page,"page"),controller.pageByPost);
router.get('/toggle/:id/:page',validateParam(AllSchema.page,"page"),controller.toggle);

router.route('/:id')
        .get(controller.onePost)
        .patch(validateToken,controller.patch)
        .delete(validateToken,controller.drop);


module.exports = router;
