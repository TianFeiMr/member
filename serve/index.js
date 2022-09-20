const http=require('http')
const server=http.createServer((req,res)=>{
    res.end("hello word 00544")
})
server.listen(3000)