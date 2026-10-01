const http=require("http");
const fs=require("fs");

if(!fs.existsSync("files"))
    fs.mkdirSync("files");

http.createServer((req,res)=>{
    let file="files"+req.url;

    if(req.method=="POST"){
        let data="";
        req.on("data",d=>data+=d);
        req.on("end",()=>{
            fs.writeFile(file,data,()=>{
                res.end("File created");
            });
        });
    }
    else if(req.method=="GET"){
        fs.readFile(file,"utf8",(err,data)=>{
            res.end(err?"File not found":data);
        });
    }
    else if(req.method=="PUT"){
        let data="";
        req.on("data",d=>data+=d);
        req.on("end",()=>{
            fs.writeFile(file,data,()=>{
                res.end("File updated");
            });
        });
    }
    else if(req.method=="DELETE"){
        fs.unlink(file,()=>{
            res.end("File deleted");
        });
    }
}).listen(3000,()=>console.log("Server started"));