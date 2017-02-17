'use strict'

var URL = require('url');
var PATH = require('path');
var HTTP =require('http');
var FS = require('fs');

//If file found, process it to response 
function processFile(filepath,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    FS.createReadStream(filepath).on('end',function(){
            res.end(); //Must have it for each response
    }).pipe(res);//8 pipe content to response
}


//1 Get from command line the root path where requested file will be searching for
var root = "H:/IT/WebDevelopment/JS"; 
//var root = PATH.resolve(process.argv[2]||'.');"
console.log("Root path: "+root);

//2 Create sever
var server = HTTP.createServer(function(req,res){
    //3 Get file path from sent url
    var path = URL.parse(req.url).pathname;

    //4 Produce the final file path for searching
    var filepath = PATH.join(root,path);
    console.log("filepath: "+filepath);
    //5 Get the file status using fs.stat();
    FS.stat(filepath, function(err, stats){
        if(err){
            console.log("Error 404");
            res.writeHead(404,{"Content-Type":"text/html"});
            res.end("<h1>404 Not Found</h1>");
        }
        if(!err&&stats.isFile()){
            console.log("File existed");
            processFile(filepath,res);

        //     //6 write header's info
        //     res.writeHead(200,{'Content-Type':'text/html'});
            
        //     //7 create data read stream to read data from local file
        //     //Because .pipe() is async, so wrap .end() in callback
        //     //otherwise .end will be executed before .pipe() has been done.
        //    FS.createReadStream(filepath).on('end',function(){
        //        res.end(); //Must have it for each response
        //    }).pipe(res);//8 pipe content to response
        }else if(stats.isDirectory()){
            path=['index.html','default.html'];
            filepath = PATH.join(filepath, path[0]);
            if(FS.existsSync(filepath)){

            }else{
                res.end("<h1>No index.html found</h1");
            }
        }
        
    });
});

//9 start listen
server.listen(8080);
console.log ("Listening at localhost:8080");
