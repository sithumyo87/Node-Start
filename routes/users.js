const router = require('express').Router();

router.get('/',(req,res)=>{
    res.json({msg:'Get Method is Working'})
});
router.post('/',(req,res,next)=>{
    res.json(req.body);
})

router.route('/:id')
        .get((req,res,next) => res.json({msg:`Get One Id - ${req.params.id} is working Fine`}))
        .patch((req,res,next) =>  res.json(`This is Edit Id ${req.params.id}`))
        .delete((req,res,next) => res.json(`This is Delete Id ${req.params.id}`))
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