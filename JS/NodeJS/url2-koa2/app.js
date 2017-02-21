'use strict'

//Require Class Koa
const Koa = require('koa');
//Require koa router and invoke it
const router = require('koa-router')();
//Require bodyParser to parse the body content from 'POST' request
const parser = require('koa-bodyparser');
//Require controller
//Note the relative path ./
const controller = require('./controller');


//Create Koa instance
const app = new Koa();

//add bodyparser
app.use(parser())

//add router routes returned from 'controller'
app.use(controller());


app.listen(3000);
console.log("App at port 3000...");