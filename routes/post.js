const router = require("express").Router();

router.get('/',(req,res)=>{
    res.json({msg:'Get Method is Working Fine in Post'})
});
router.post('/',(req,res,next)=>{
    res.json(req.body);
})

router.route('/:id')
        .get((req,res,next) => res.json({msg:`Get One Id - ${req.params.id} is working Fine In Post`}))
        .patch((req,res,next) => res.json(`This is Post of Edit Id ${req.params.id}`))
        .delete((req,res,next) =>  res.json(`This is Post of Delete Id ${req.params.id}`));






module.exports = router;
