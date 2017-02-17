'use strict'

var http = require('http');

//create a http.Server instance
var server =http.createServer(function(req,res){
    
    console.log(req.method+": "+req.url);
    console.log("hahahah");
    res.writeHead(200, 
        {'Content-Type':'text/html', 
        'Date':'Tue, 14 Feb 2017'
        });
    
   res.write("<strong>Write a chunk by res.write()<strong>",function(){console.log("NICE")});
   
   //.end() MUST be called on each res
   //.end(data) = res.write(data); res.end();
    res.end('<h1>first server response</h1>');

})

server.listen(8080);// 0<=port<65536
console.log("Server is running at http://127.0.0.1:8080/");