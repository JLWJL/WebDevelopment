'use strict'

var fn_index = async (ctx, next)=>{
    ctx.response.body=`<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

var fn_signin = async (ctx, next)=>{
    var name = ctx.request.body.name || '';
    var psw = ctx.request.body.password || '';
    ctx.response.type = 'text/html';
    if(name === "ryan" && psw === '666'){
        ctx.response.body ="<h1> Welcoooommmme, "+name+"</h1>";
    }else{
        ctx.response.body ='<h1>Invalid login</h1>\r\n<a href="/">Try again</a>';
    }
}


module.exports ={
    'GET /': fn_index,
    'POST /signin': fn_signin
}