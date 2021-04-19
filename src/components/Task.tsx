import React from "react";
import { Link } from "react-router-dom";
import { createRoute, Routes } from "../router";
import { TaskType } from "../types";
import styled from 'styled-components'

const StyledTask = styled.div`
	padding: .25em;
`;

const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
	&:hover {
		color: gray
	}
`;

interface TaskProps {
	todo: TaskType;
}

const Task: React.VFC<TaskProps> = ({ todo }) => {
	const { id, title } = todo;

	return (
		<StyledTask>
			<StyledLink to={createRoute[Routes.detail](id)}>
				{title}
			</StyledLink>
		</StyledTask>
	);
}



export default Task;
