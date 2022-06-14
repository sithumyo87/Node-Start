const router = require('express').Router();
const controller = require('../controller/commentController');
const { CommentSchema, AllSchema} = require('../utilies/schema');
const { validateBody,validateParam ,validateToken} = require('../utilies/validator');

router.get('/',controller.getAll);
router.post('/',[validateBody(CommentSchema),controller.postComment]);

router.delete('/:id',[validateToken,validateParam(AllSchema.id,'id'),controller.dropComment])

module.exports = router;