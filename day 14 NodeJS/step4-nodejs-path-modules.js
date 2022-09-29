var path=require("path");
//console.log("C://valtech training/day 14 NodeJS/step4-nodejs-path-modules.js");
//console.log(path.resolve("C://valtech training/day 14 NodeJS/step4-nodejs-path-modules.js"));
var list=["users","guests","admin"];
var files=["index.html","profile.html","detailes.html"];
//console.log(path.join(list[0],files[0]));
console.log(path.join(list[Math.floor(Math.random()*list.length)],files[Math.floor(Math.random()*list.length)]))