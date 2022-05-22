const router = require('express').Router();
const controller = require('../controller/userController');

router.get('/',controller.all);
router.post('/',controller.addUser);

router.route('/:id')
        .get(controller.oneUser)
        .patch(controller.editUser)
        .delete(controller.deleteUser)
// router.get('/:id',(req,res,next)=>{
//     res.json({msg:`Get One Id - ${req.params.id} is working Fine`})
// })

// router.patch('/:id',(req,res,next)=>{
//     res.json(`This is Edit Id ${req.params.id}`)
// })
// router.delete('/:id',(req,res,next)=>{
//     res.json(`This is Delete Id ${req.params.id}`)
// })
module.exports = router;