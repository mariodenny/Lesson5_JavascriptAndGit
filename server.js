// buat server untuk handle 3 file
// home.html, about.html , contact.html
// optional pake boostrap
// gunakan navbar untuk navigasi 3 file tersebut

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) =>{
    if(req.url === "/home" && req.method === "GET"){
         fs.readFile('home.html', (err, data)=>{
                    res.writeHead(200, {
                        'Content-Type' : 'text/html'
                    })
        
                    res.write(data)
                    res.end()
                })
                return
    }else{
         fs.readFile('404.html', (err, data)=>{
                    res.writeHead(404, {
                        'Content-Type' : 'text/html'
                    })
        
                    res.write(data)
                    res.end()
                })
                return
    }
    res.end()
})

server.listen(5501, ()=>{
    console.log("Server running on http://localhost:5501")
})
