 'use strict'

 var fs = require('fs');

// /****** Read Stream******/
var _readStream = fs.createReadStream('test-writeFile.txt',{encoding:'utf-8', start: 1, end:10}); //createReadStream(path[,options]);

//'data' event emitted when stream is in flowing mode via .pipe(), .resume()
//or attaching a listener callback to it
_readStream.on('data', function(stream){
    console.log(stream);
});

console.log("These are all async");

_readStream.on('readable', function(){
    console.log("Available now");
});

//'end' event emitted when data stream is COMPLETELY consumed
_readStream.on('end', function(){
    console.log("No more stream data");
});

//'error' event emitted when error/exception occurred
_readStream.on('error', function(err){
    console.log("An error: " + err);
});


/****** Write Stream ******/
var ws = fs.createWriteStream('output_writeStream.txt','utf-8');
ws.write('11111');
ws.write('222222');
//ws.end('Ending'); //call .write() after .end() is error

//when the stream and any of its underlying resources (a file descriptor, for example) have been closed. No more events and computation
ws.on('close',function(){console.log("closed")});

//Emitted after .end() has been called
ws.on('finish',function(){console.log("finished")});


/****** Pipe ******/
_readStream.pipe(ws);
console.log("Pipe async?");
_readStream.on('end',function(){console.log("Pipe finishes")});

