require("dotenv").config();
const http = require("http");
const port = process.env.PORT || 8080;
const host = "localhost";

const server = http.createServer((req, res) => {
    console.log(`${req.method} -> ${req.url} effettuata`);
    if (req.url === "/favicon.ico"){
        res.writeHead(404);
        res.end();
        return;
    }
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.end("<h1> Benvenuto </h1>")
})

server.listen(port, host, ()=>{
    console.log(`Server avviato -> http://${host}:${port}`)
})