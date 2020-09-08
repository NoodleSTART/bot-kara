var express = require("express");
var http = require("http");
var app = express();
// uptime robot (web)
const { get } = require("snekfetch");
const bot = express();
bot.get("/", (request,response) =>{
console.log("pinging");
  response.sendStatus(200);
})

app.listen(process.env.PORT);
setInterval(() => {
             
 http.get('http://bot-kara.glitch.me/');                    
 }, 280000);