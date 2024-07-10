const { error } = require('console');
const http = require('http');
const { hostname } = require('os');

const options={
    hostname:'fakestoreapi.com',
    path:'/products/1',
    method:'GET'
}

const apireq=http.request(options,(ApiRes)=>{
    ApiRes.on("data",(data)=>{
        console.log(data.toString());
    })
});


apireq.on("error",()=>{
    console.log(error);
})
apireq.end(); 