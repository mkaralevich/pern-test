import React, { Fragment, useState, useEffect } from "react";
import TodoEdit from "./TodoEdit";

export default function TodoList() {
	const [todos, setTodos] = useState([]);

	const getTodos = async () => {
		try {
			const response = await fetch("http://localhost:5000/todos");
			const jsonData = await response.json();
			setTodos(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getTodos();
	}, []);

	const deleteTodo = async (id) => {
		try {
			const response = await fetch(`http://localhost:5000/todos/${id}`, {
				method: "DELETE",
			});
			setTodos(todos.filter((todo) => todo.todo_id !== id));
		} catch (err) {
			console.error(err.message);
		}
	};

	const allTodos = todos.map((todo, key) => {
		return (
			<div key={key}>
				<div>{todo.todo_id}</div>
				<TodoEdit todo={todo} />
				<button onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
			</div>
		);
	});
	return (
		<Fragment>
			<h1>todos:</h1>
			{allTodos}
		</Fragment>
	);
}
