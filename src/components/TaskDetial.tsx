import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ApplicationState } from '../redux';
import { Routes, RouteParams } from '../router';

const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
	&:hover {
		color: gray
	}
`;

const StyledDetail = styled.div`
	margin-top: .5em;
`;

interface TaskDetailProps { }

const TaskDetail: React.VFC<TaskDetailProps> = () => {
    const { todoId } = useParams<RouteParams[Routes.detail]>();
    const todo = useSelector((state: ApplicationState) => state.todos.todos.find(todo => todo.id === todoId.toString()));

    return (
        <>
            <StyledLink to={Routes.home}>Back</StyledLink>
            <StyledDetail>
                Detail of task: {todo?.title}
            </StyledDetail>
        </>
    );
}

export default TaskDetail