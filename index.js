// import json server library in index.js

const jsonServer = require('json-server')

//create server using json-server library

const videoPlayer = jsonServer.create()

//create a path to db.json

const router =jsonServer.router('db.json')

//middleware to convert js to json

const middleware = jsonServer.defaults()

//connect
 videoPlayer.use(middleware)
 videoPlayer.use(router)

 //setup port for server 

 const port = 4000 || process.env.port

 //monitor 4000
 videoPlayer.listen(port,()=>{
    console.log(`vodeo player is listening to ${port} & waiting for the request`);
 })


