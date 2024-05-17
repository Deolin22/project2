const http = require('http');
const server=http.createServer((req, res) =>{
    res.writeHead(200,{'content-Type':'text/plan'});
    res.end('Hello, this is a simple Node.js server!\n');
});
const port=4000;
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})