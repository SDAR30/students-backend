const express = require('express')
const app = express();

const studentsController = require('./controllers/studentsController')

app.use('/students', studentsController)

app.get('/', (req, res) => {
    res.send("The home pagee")
})


module.exports = app;