'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const sessions = require('./sessions.json');

app.get('/',(req,res)=>{
    res.send('<h1>Hello Salesforce Devs from Enpress</h1>');
});
app.get('/api/sessions',(req,res)=>{
    res.json(sessions);
});
 
app.listen(port,()=>{
    console.log(`Express server running on http://localhost:${port}`);
})