'use strict'
//This code is used to examin how much time of setTimeout spends
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next)=>{
    let start = new Date;
    console.log("Start: "+start);
    await next();
    let end = new Date;
    console.log("Used: %s - %s = %s", end,start,end-start);
});

app.use(async (ctx, next)=>{
    let start = new Date;
    await next();
    setTimeout(function(){
        console.log("An egg every 2 seconds");
        let end = new Date;
    console.log("Used: %d",end-start);

    },3000);
    });

app.use(async ()=>{
    console.log("Bottom");
})

app.listen(2000);
console.log("Listening 200")