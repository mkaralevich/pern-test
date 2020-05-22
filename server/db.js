const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "i4aNOm&POnek",
	host: "localhost",
	port: 5432,
	database: "perntodo",
});

module.exports = pool;
