const express = require('express')
const app = express();
const cors = require('cors')

const studentsController = require('./controllers/studentsController')
const namesController = require('./controllers/namesController')
const awsCredentials= require('./controllers/awsAuth');

app.use(express.json())
app.use(cors())
app.use('/students', studentsController)
app.use('/names', namesController)
app.use('/awsAuth', awsCredentials)
app.get('/', (req, res) => {
    res.send("The home pagee")
})


module.exports = app;