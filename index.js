const express = require("express");
const sockerServer = require("ws").Server;
const app = express();
app.get("/", (req, res)=>
{
    res.send('Hello world');
})
app.get("/api/open/", (req, res)=>
{
    res.send('Hello api');
})

const server = socket.listen(httpServer);

const wss = new sockerServer({server});
