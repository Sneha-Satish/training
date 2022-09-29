const fs=require("fs");
//fs.writeFileSync("tempt.txt", "welcome to valtech","utf-8");

/*fs.readFile("tempt.txt","utf-8",function(error,data){
    if(error){
        console.log("error",error)
    }else{
        console.log(data)
    }
})*/

fs.watchFile("tempt.txt",function(){
    console.log("file is updated");
})
setInterval(function(){
    fs.appendFile("tempt.txt","\nIndia","utf-8",function(error,data){
        if(error){
            console.log("error",error)
        }else{
            console.log("content added")
        }
    });
},2000);