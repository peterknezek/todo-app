import { Action, ActionCreator } from "redux";
import { TaskType } from "../../../types";

export const ADD_TODO_TO_LIST = "[TODO] ADD_TODO_TO_LIST";
export const ADD_TODOS_TO_LIST = "[TODO] ADD_TODOS_TO_LIST";
export const SET_TODOS_TO_LIST = "[TODO] SET_TODOS_TO_LIST";
export const REMOVE_TODO_FROM_LIST = "[TODO] REMOVE_TODO_FROM_LIST";
export const RESET_TODOS_LIST = "[TODO] RESET_TODOS_LIST";


/**
 * Add Todo to list
 * @param todo one todo
 */
export const addTodoToList: ActionCreator<AddTodoToList> = (todo: TaskType) => ({
    type: ADD_TODO_TO_LIST,
    todo,
});

interface AddTodoToList extends Action {
    type: typeof ADD_TODO_TO_LIST;
    todo: TaskType;
}

/**
 * Add many todos to list
 * @param todo array of todos
 */
export const addTodosToList: ActionCreator<AddTodosToList> = (todos: TaskType[]) => ({
    type: ADD_TODOS_TO_LIST,
    todos,
});

interface AddTodosToList extends Action {
    type: typeof ADD_TODOS_TO_LIST;
    todos: TaskType[];
}

/**
 * Set todos to list (rewrite)
 * @param todo array of todos
 */
export const setTodosToList: ActionCreator<SetTodosToList> = (todos: TaskType[]) => ({
    type: SET_TODOS_TO_LIST,
    todos,
});

interface SetTodosToList extends Action {
    type: typeof SET_TODOS_TO_LIST;
    todos: TaskType[];
}

/**
 * Remove Todo to list
 * @param id todo's ID
 */
export const removeTodoFromList: ActionCreator<RemovePlanChange> = (
    id: TaskType["id"]
) => ({
    type: REMOVE_TODO_FROM_LIST,
    id,
});

interface RemovePlanChange extends Action {
    type: typeof REMOVE_TODO_FROM_LIST;
    id: TaskType["id"];
}

/**
 * Clean up list
 */
export const resetTodosList: ActionCreator<ResetTodosList> = () => ({
    type: RESET_TODOS_LIST,
});

interface ResetTodosList extends Action {
    type: typeof RESET_TODOS_LIST;
}

export type TodosListActionTypes =
    | AddTodoToList
    | AddTodosToList
    | SetTodosToList
    | RemovePlanChange
    | ResetTodosList;

export const todoListActions = {
    addTodoToList,
    addTodosToList,
    setTodosToList,
    removeTodoFromList,
    resetTodosList,
};