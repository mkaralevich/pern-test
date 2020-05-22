import React, { Fragment, useState } from "react";

export default function TodoEdit({ todo }) {
	const [description, setDescription] = useState(todo.description);

	const updateTodo = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			const response = await fetch(
				`http://localhost:5000/todos/${todo.todo_id}`,
				{
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				}
			);
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<Fragment>
			<input
				defaultValue={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button onClick={(e) => updateTodo(e)}>Edit</button>
		</Fragment>
	);
}
