const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');
const db = require('./conn')
const response = require('./res')


app.use(bodyParser.json())

app.get("/", (req, res)=>{
    db.query("SELECT * FROM datamahasiswa", (error, result)=>{
        const data = JSON.parse(JSON.stringify(result))
        response(200 , data, "get all data from datamahasiswa", res )
    })
})

app.get("/find", (req, res)=>{
    db.query(`SELECT * FROM datamahasiswa where id = ${req.query.id}`, (error, result)=>{
        response(200, result, "sent", res)
    })
})

app.post("/login", (req, res)=>{
    console.log({RequestFromOutside : req.body})
    res.send("login berhasil")
})

app.put('/username', (req, res)=>{
    console.log({updateData : req.body})
    res.send('update berhasil')
})

app.listen(port, ()=>{
    console.log(`server running in port ${port}`)
})