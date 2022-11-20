// //bring in library to help manage our queries
// const pgp = require('pg-promise')();
// //get access to env file
// require("dotenv").config();

// //
// const databaseURL = process.env.DB_URL;

// //connection object, with URL, boolean value to cut on connection if not being used, max of 30 connections
// const cn = {
//     connectionString: databaseURL,
//     allowExitOnIdle: true,
//     max: 30
// }

// //set up our connection to databse
// const db = pgp(cn);

// //pass that connection around the rest of our application
// module.exports = db;
// at 1:53:00

const pgp = require('pg-promise')();
require("dotenv").config();
const URL = 'postgres://postgres:123456@127.0.0.1:5432/students_db';

const cn = {
    connectionString: URL,
    allowExitOnIdle: true,
    max: 30
}
if(process.env.NODE_ENV === ' production'){
    cn.ssl = {
        rejectUnauthorized: false,
    }
}

const db = pgp(cn)

module.exports = db;