const productRouter=require('./product');
const express= require ('express');
const bodyparser=require('body-parser');

const app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use(productRouter);
app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on 3000');
})


