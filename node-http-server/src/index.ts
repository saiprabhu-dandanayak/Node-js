import * as http from "http"

const requesthandler = (req : http.IncomingMessage, res : http.ServerResponse) =>  {

    console.log(`Request received: ${req.method} ${req.url}`)

    if(req.method === "GET" && req.url=='/'){
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello guys , I am learning Node js!')
    }else if(req.method === "GET" && req.url=="/about"){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message : "Hello, i am Saiprabhu..."}))
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Page not found')
    }
}

const server = http.createServer(requesthandler)
server.listen(3000, () =>{
    console.log("Server is running on port 3000")
});