const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/room-management-client'));

app.get('/*',(req,res)=>
    res.sendFile('index.html',{root:'dist/room-management-client/'}),
);

app.listen(process.env.PORT || 8000)