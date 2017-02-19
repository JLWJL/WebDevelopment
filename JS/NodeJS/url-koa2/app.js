'use strict'

//Require Class Koa
const Koa = require('koa');
//Require koa router and invoke it
const router = require('koa-router')();
//Require bodyParser to parse the body content from 'POST' request
const parser = require('koa-bodyparser')();



//Create Koa instance
const app = new Koa();

//Create router with various HTTP method
//Routers are CHANABLE
router.get('/Ryan/:name', async (ctx,next)=>{
    ctx.response.body='<h1>Hello, '+ ctx.params.name +'</h1>';
    //await next();
}).get('/', async (ctx, next)=>{
    ctx.response.body =`<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', async (ctx,next)=>{
    var name = ctx.request.body.name || '';
    var psw = ctx.request.body.password || '';
    ctx.response.type='text/html';
    if(name==='ryan'&&psw==='666'){
        ctx.response.body='<h1>Here you go, ${name}!</h1>'
    }else{
        
        ctx.response.body='Invalid login<p><a href="/">Try again</a></p>'
    }
});

//add bodyparser
app.use(parser)

//add routers 
app.use(router.routes());


// //For any request, run async function below
// app.use(async (ctx,next)=>{
//     //next() is the next executable async function
//     console.log("async1")
//     await next();
//     console.log("async3")
//     //ctx is variable containing http 'response' and 'request'
//     ctx.response.type='text/html';
//     ctx.response.body +='<h1>Hello Koa2</h1>';
// });

// app.use(async (ctx,next)=>{
//      setTimeout(function(){
//             ctx.response.body="<h3>Second next()</h3>";
//         //await next();
//         console.log("async2");
//         console.log("nono");
        
//      },2000);
    
// })

app.listen(3000);
console.log("App at port 3000...");