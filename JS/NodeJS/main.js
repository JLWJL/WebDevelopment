'use strict'

//Variable doesn't to be 'greet' as in 'firstNode'
var gre = require('./firstNode'); //reference path

var s ='Ryan';

gre.greet(s);
gre.hug(s);


process.nextTick(
    //This will be run in next event loop
   function(){
       console.log("This is next tick");
       console.log("Current file: "+__filename);
       console.log("Current file: "+__dirname);
   }
);
console.log("This is previous tick");

process.name="Sample";

console.log('process.argv: '+JSON.stringify(process.argv)); 

console.log("cwd: "+ process.cwd());    //current working dir

var dir = '/private/tmp';
if(process.platform ==='win32'){
    dir='H:\\IT\\Webdevelopment\\JS';
}
process.chdir(dir);
console.log('cwd: '+process.cwd());

process.exitCode=1; //specify gracefully exit mode, so async code can be run

process.on('exit',function(){
    console.log("Exiting...Async code will be abandoned");
});
