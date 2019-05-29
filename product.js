const express=require ('express');
const router=express.Router();

router.get('/product',(request,response)=>{
    response.send("list of product");
})


module.exports=router;