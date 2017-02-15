'use strict'

var fs = require('fs');
process.chdir('H:\\IT\\WebDevelopment\\JS\\NodeJS');

/****Read files*****/
console.log("Below is synchronously reading file");
//Sync reading file directly RETURN the content of the file.
//No callback function is needed.
//Using try/catch block to catch any error/exception
try{
    let read = fs.readFileSync('sample-image.JPG');
    console.log(read.length/1024+"KB");
}
catch(err){
    console.log("Output error: "+err);
}

//Async way to read file
//Async form is usually like:
// fnc('path', 'encoding', callback(err,data){});
console.log("Below is asynchronously reading file");
fs.readFile('NodeJS.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data.length);
    }
});
console.log("This should be before readFile()");

/*****Write files*****/
let write = 'Ryan wrote this file using node js.'; 
fs.writeFile('test-writeFile.txt',write,function(err, data){
    if(err) throw err;
    console.log("File is created, go have a look!");
});


/***** Obtain file info *****/
//Async way
fs.stat('test-writeFile.txt',function(err, stats){
    if(err) console.log(err);
    console.log("Is a file? "+stats.isFile());
    console.log("Is a directory? "+stats.isDirectory());
    console.log("File size? "+stats.size);
    console.log("Created time? "+stats.birthtime);
    console.log("When last modified? "+stats.mtime);
    console.log("When last changed? "+stats.ctime);
    console.log("When last accessed? "+stats.atime);
});