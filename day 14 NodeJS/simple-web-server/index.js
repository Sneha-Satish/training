const http=require("http");

let server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1> welcome to valtech</h1>");
    res.end();
});

server.listen(1010,"localhost",function(error){
    if(error){
        console.log("error",error)
    }else{
        console.log("server is now live on localhost:1010")
    }
})