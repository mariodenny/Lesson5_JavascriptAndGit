const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
        res.write("Hello World from HTTP Node JS!")
    }else if(req.url === "/hello" && req.method === "GET"){
        res.write("Hy iam another text!")
    }else if(req.url === "/world" && req.method === "GET"){
        res.write("Iam world!")
    }else if(req.url == "/home" && req.method === "GET"){
        res.write(`
                <h1>Home Page</h1>
                <p>Learning about Node.JS HTTP and Server</p>
                <a href="/home">Home</a>
                <a href="/about">About</a>
            `)
    }else if(req.url == "/about" && req.method === "GET"){
        fs.readFile('index.html', (err, data)=>{
            res.writeHead(200, {
                'Content-Type' : 'text/html'
            })

            res.write(data)
            res.end()
        })
        return
    }else{
        res.writeHead(404, {
            'Content-Type' : 'text/html'
        })

        res.write(`
            <h1>404 Not Found</h1>
            <p>Page does not exist</p>
        `)
    }
    res.end()
})

server.listen(5500, ()=>{
    console.log("Server running on http://localhost:5500")
})
