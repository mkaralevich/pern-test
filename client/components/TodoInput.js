import React, { Fragment, useState } from "react";

export default function TodoInput() {
	const [description, setDescription] = useState("");
	// form event
	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			// packaging response
			const body = { description };
			// Making POST request
			const response = await fetch("http://localhost:5000/todos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			<h1>input todo</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					value={description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}
				/>
				<button>Add</button>
			</form>
		</Fragment>
	);
}
