'use strict'

var fs = require('fs');
process.chdir('.\\JS\\NodeJS');

//Async way to read file
//Async form is usually like:
// fnc('path', 'encoding', callback(err,data){});

fs.readFile('NodeJS.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data.length);
    }
});

console.log("This should be before readFile()");