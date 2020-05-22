import React, { Fragment } from "react";

import TodoInput from "../components/TodoInput";
import Meta from "../components/Meta";
import TodoList from "../components/TodoList";

export default function Home() {
	return (
		<Fragment>
			<Meta />
			<TodoInput />
			<TodoList />
		</Fragment>
	);
}
