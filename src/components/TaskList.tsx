import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState, todoActions } from '../redux';

import Task from './Task';

interface TaskListProps { }

const TaskList: React.VFC<TaskListProps> = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: ApplicationState) => state.todos.todos);

  React.useEffect(() => {
    dispatch(todoActions.getTodos());
  }, [dispatch])

  return (
    <div>
      {todoList.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TaskList