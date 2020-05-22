const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());


// RESTFUL API POSTGRES:
// Routes:
/*
Creating todo:
- Client sends "description" in req.body
- Server sends INSERT command to database with "description" specified
- Server resonds to client with created todo
*/
app.post("/todos", async (req, res) => {
	try {
		const { description } = req.body;
		const newTodo = await pool.query(
			"INSERT INTO todo (description) VALUES($1) RETURNING *",
			[description]
		);
		res.json(newTodo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

/*
Getting all todos:
- Client sends POST "/todos"
- Server sends SELECT command to database, receives all todos
- Server resonds to client via res.json
*/
app.get("/todos", async (req, res) => {
	try {
		const allTodos = await pool.query("SELECT * FROM todo");
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.message);
	}
});

/*
Getting specific todo:
- Client sends "id" in req.params
- Server sends SELECT command to database with "id" specified
- Server receives OK and sends requested todo via res.json with retrieved todo
*/
app.get("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
			id,
		]);
		res.json(todo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

/*
Updating todo:
- Client sends "id" in req.params
- Client sends "description" in req.body
- Server sends UPDATE command to database with "description" and "id" specified
- Server receives OK and sends result to the client via res.json
*/
app.put("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updateTodo = await pool.query(
			"UPDATE todo SET description = $1 WHERE todo_id = $2",
			[description, id]
		);
		res.json(updateTodo);
	} catch (err) {
		console.error(err);
	}
});

/*
Deleting todo:
- Client sends "id" in query.params
- Server sends DELETE command to database with "id" specified
*/
app.delete("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
		res.json("Todo deleted");
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(5000, () => {
	console.log("server has started on port 5000");
});
