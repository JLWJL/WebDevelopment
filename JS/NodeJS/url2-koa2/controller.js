'use strict'

const fs = require('fs');

//Read js files in dir 'controllers'
function addController(router, dir){
    fs.readdirSync(__dirname+'/' + dir)
    .filter((file)=>{
        return file.endsWith('.js');
    })

    //For each js file, obtain its exports and store them in OBJECT 'mapping'
    .forEach((file)=>{
        //get an object 'mapping' containing exported methods from each single js file
        //For example, {'GET /': fn_index, 'POST /':fn_signin}
        let mapping = require(__dirname+"/"+dir + '/' +file);
        //console.log("Type of mapping: ", typeof mapping)
        addMapping(router, mapping);
    })

}

//Register each url exported by 'controllers.js' 
function addMapping(router, mapping){
    for(var m in mapping){ // 'm' is just the string of key name in obj 'mapping'
        //console.log("What is m: ", m)
        if(m.startsWith('GET ')){
            var path = m.substring(4);
            router.get(path, mapping[m]);//mapping[m] means a regarding method for m
            //console.log("What is mapping[m]: ", mapping[m]);        
            console.log(`Register URL: GET ${path}`);
        }else if(m.startsWith(`POST `)){
            var path = m.substring(5);
            router.post(path, mapping[m]);
            console.log(`Register URL: GET ${path}`);
        }else{
            console.log(`Invalid URL: ${m}`);
        }
    }
}

module.exports=function(dir){
    let
        directory = dir || 'controllers',
        router = require('koa-router')();
    addController(router,directory);
    return router.routes(); // return the registered routes for app.js
}