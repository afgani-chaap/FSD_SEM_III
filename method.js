const http = require("http");
const server = http.createServer((req, res) => {

    if( req.url === "/") {
        res.end("home page");
    } 
    else if(  req.url === "/about") {
        res.end("about page");
    } 
    else if( req.url === "/students") {
        res.end("Students page");
    }
    else {
        res.end("<h1>404 page not found</h1>");
    }
})
server.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});