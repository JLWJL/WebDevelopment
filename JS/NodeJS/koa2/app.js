'use strict'

//Require Class Koa
const Koa = require('koa');

//Create Koa instance
const app = new Koa();

//For any request, run async function below
app.use(async (ctx,next)=>{
    //next() is the next executable async function
    console.log("async1")
    await next();
    console.log("async3")
    //ctx is variable containing http 'response' and 'request'
    ctx.response.type='text/html';
    ctx.response.body +='<h1>Hello Koa2</h1>';
});

app.use(async (ctx,next)=>{
     setTimeout(function(){
            ctx.response.body="<h3>Second next()</h3>";
        //await next();
        console.log("async2");
        console.log("nono");
        
     },2000);
    
})

app.listen(3000);
console.log("App at port 3000...");