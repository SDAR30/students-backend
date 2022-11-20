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

// if(process.env.NODE_ENV === ' production'){
//     cn.ssl = {
//         rejectUnauthorized: false,
//     }
// }

// //set up our connection to databse
// const db = pgp(cn);

// //pass that connection around the rest of our application
// module.exports = db;
// at 1:53:00

const pgp = require('pg-promise')();
require("dotenv").config();

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER  } = process.env;
const cn = DB_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
    };

const db = pgp(cn)

module.exports = db;