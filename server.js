const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("hlo this is a node js server");
});
const port=3000;
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})