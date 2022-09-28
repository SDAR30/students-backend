const express = require('express')
const app = express();

//routes
app.get('/', (req, res) => {
    res.send("The home pagee")
})


module.exports = app;