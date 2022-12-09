const pgp = require('pg-promise')();
const connectionString = "postgresql://postgres:12345@localhost:19548/mydb"

const db = pgp(connectionString);


// console.log(db)



module.exports = db;