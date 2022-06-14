const router = require('express').Router();
const controller = require('../controller/categoryController');
const { imageUpload } = require('../utilies/gallery');
const { AllSchema,AddCat } = require('../utilies/schema');
const { validateBody, validateParam, validateToken} = require('../utilies/validator')

router.get('/',controller.all)
router.post('/',[imageUpload,validateBody(AddCat),controller.add])

router.route('/:id')
.get(validateParam(AllSchema.id,"id"),controller.getOne)
.patch(validateToken,imageUpload,validateBody(AllSchema.image),controller.patch)
.delete(validateToken,validateParam(AllSchema.id,"id"),controller.drop)

module.exports = router;

//.patch(validateParam(AllSchema.id,"id"),controller.patch)

