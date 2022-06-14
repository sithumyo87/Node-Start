const router = require('express').Router();
const controller = require('../controller/userController');
const {validateBody} = require('../utilies/validator');
const {RegisterSchema} = require('../utilies/schema')

router.post('/',controller.login);
router.post('/register',[validateBody(RegisterSchema),controller.register]);
// router.get('/',controller.all);
module.exports = router;


// router.post('/',controller.addUser);

// router.route('/:id')
//         .get(controller.oneUser)
//         .patch(controller.editUser)
//         .delete(controller.deleteUser)
// router.get('/:id',(req,res,next)=>{
//     res.json({msg:`Get One Id - ${req.params.id} is working Fine`})
// })

// router.patch('/:id',(req,res,next)=>{
//     res.json(`This is Edit Id ${req.params.id}`)
// })
// router.delete('/:id',(req,res,next)=>{
//     res.json(`This is Delete Id ${req.params.id}`)
// })
