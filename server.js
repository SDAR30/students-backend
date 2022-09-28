const app = require('./app.js');


//can take 2 args, PORT and callback to run when system starts up
app.listen(3000, ()=>{
    console.log("listening on...")
})