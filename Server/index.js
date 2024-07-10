const http=require('http');
   const PORT=4040;
   const HOSTNAME='localhost';

const server=http.createServer((req,res)=>{
    // Home page
    // About Page
    // Contact Page
    // Product page
    // Rest page
    // Rest...

    if(req.url=='/'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/plane');
        res.end("Node Server created by Afsar");
    }else if (req.url=='/about') {
        res.statusCode=200;
        res.setHeader('Content-Type','text/plane');
        res.end("This is an About page...");
    }else if (req.url=='/contact') {
        res.statusCode=200;
        res.setHeader('Content-Type','text/plane');
        res.end("This is an contact page...!");
    }else if (req.url=='/product') {
        const options={
            hostname:'fakestoreapi.com',
            path:'/products/1',
            method:'GET'
        }
        
        const apireq=http.request(options,(ApiRes)=>{
            ApiRes.on("data",(data)=>{
                console.log((data.toString()));
            })
        });
        
        
        apireq.on("error",()=>{
            console.log(error);
        })
        apireq.end(); 
    }else  {
        res.statusCode=500;
        res.setHeader('Content-Type','text/plane');
        res.end("Error ! No such url exist...");
    }







    // res.statusCode=200;
    // res.setHeader('Content-Type','text/plane');
    // res.end("Node Server created by Afsar");
});
server.listen(PORT,()=>{
    console.log(`Server is running at ${HOSTNAME} : ${PORT}`);
});