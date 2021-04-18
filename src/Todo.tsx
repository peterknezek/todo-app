import React from "react";

interface TodoProps {
    todo: {id: string; title: string;}
}

const Todo: React.VFC<TodoProps> = ({todo}) => {
    const { title } = todo;

	return (
		<div>
			<a href={'/detail'}>
			    {title}
			</a>
		</div>
	);
}

export default Todo;
