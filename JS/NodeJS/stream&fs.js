'use strict'
//There is a 'stream' module that for developers who want to create new types of 'stream' instances.
//For coders who primarily consume 'stream' objects, no need to use 'stream' directly

var fs = require('fs');
var strm = require('stream');

//rs is the returned instance of fs.ReadStream type
var rs =fs.createReadStream('Stream&FS.txt');
console.log("rs is a "+typeof rs);
console.log("Constructor "+rs.constructor.name);

//rss and rdb are two constructor function
var rds =fs.ReadStream;
console.log("rds is a "+typeof rds);

var rdb= require('stream').Readable;
console.log("rdb is a "+typeof rdb);

//rs is instance of both rdb and rds which means
// fs.ReadStream and stream.Readable has a inheritance relationship
console.log("Is rs an instance of stream.Readable? ",rs instanceof rdb);
console.log("Is rs an instance of fs.ReadStream? " +( rs instanceof require('fs').ReadStream));

//Prove fs.ReadStream inherits stream.Readable
console.log(rds.prototype instanceof rdb);