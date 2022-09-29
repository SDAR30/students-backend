const app = require('./app.js');

require('dotenv').config();
const PORT = process.env.PORT;

//can take 2 args, PORT and callback to run when system starts up
app.listen(PORT, ()=>{
    console.log("listening on... "+ PORT)
})