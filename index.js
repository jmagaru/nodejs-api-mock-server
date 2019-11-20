
const express = require('express');
const fs = require('fs');

// custom middleware create
const LoggerMiddleware = (req,res,next) =>{
    console.log(`Logged  ${req.method} ${req.url} - ${res.statusCode} -- ${new Date()}`);
    jsonEndpointData = JSON.parse(fs.readFileSync('payloads/endpoint-data.json'))
    var responseData

    // the following if statement is just to support product detail return static data
    // Moving forward. TODO : create a json file that has exceptions on endpoint data
    // if((req.url).includes("prefix of the endpoint that has static id")){
    //    req.url = "generic endpoint where statis id has been removed "
    //}

    for(var i = 0;i< jsonEndpointData.length;i++){
        if (jsonEndpointData[i].endpoint == req.url) { responseData = jsonEndpointData[i].responseFile}
    }
    if(req.method == 'POST' )
        {
            app.post(req.url,(req,res)=>{
                res.json(JSON.parse(fs.readFileSync(responseData)))
            })
        }
    if(req.method == 'GET' )
        {
            app.get(req.url,(req,res)=>{
                res.json(JSON.parse(fs.readFileSync(responseData)))
            })
        }
        if(req.method == 'PUT' )
        {
            app.put(req.url,(req,res)=>{
                res.json(JSON.parse(fs.readFileSync(responseData)))
            })
        }
        if(req.method == 'DELETE' )
        {
            app.delete(req.url,(req,res)=>{
                res.json(JSON.parse(fs.readFileSync(responseData)))
            })
        }
    next();
}

const app = express()

// application level middleware
app.use(LoggerMiddleware);

app.listen(3333,(req,res)=>{
    console.log('server running on port 3333');

})
