const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.write("Hello World from HTTP Node JS!")
    } else if (req.url.startsWith("/hello/") && req.method === "GET") {
        const username = req.url.split('/')[2]  
        res.end("Hello " + username)

    } else if (req.url === "/world" && req.method === "GET") {
        res.write("Iam world!")
    } else if (req.url == "/home" && req.method === "GET") {
        res.write(`
                <h1>Home Page</h1>
                <p>Learning about Node.JS HTTP and Server</p>
                <a href="/home">Home</a>
                <a href="/about">About</a>
            `)
    } else if (req.url.startsWith("/about/") && req.method === "GET") {
        const name = req.url.split('/')[2]
        fs.readFile('index.html', 'utf-8', (err, data) => {
            const html = data.replace('{{name}}' , name)
            
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.end(html)
        })
        return
    }else if(req.url === "/send" && req.method==="POST"){
        let body = ""
        req.on('data', (chunk) =>{
            body+=chunk
        })

        req.on('end', ()=>{
            const data = JSON.parse(body)
            console.log(data)
            res.end("Data send")
        })
    }else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })

        res.write(`
            <h1>404 Not Found</h1>
            <p>Page does not exist</p>
        `)
    }
    res.end()
})

server.listen(5500, () => {
    console.log("Server running on http://localhost:5500")
})