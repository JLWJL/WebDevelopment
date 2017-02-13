'use strict'
//Write each function in seperate files, each file is called a 'MODULE'
//Load module mechnism is called 'CommonJS'.


var a = "Hello";

function greet(name){
    console.log(a + ", " + name + "!");
}

function hug(name){
    console.log("Let's hug, "+name+"!");
}

//Expose 'greet' to outter by 'exports'. 
//ANYTHING could be exported.
// module.exports={
//     greet: greet,
//     hug: hug
// }

module.exports.greet = greet;
module.exports.hug = hug;


//Invalid
//exports.greet = greet;
// exports.hug = hug;



