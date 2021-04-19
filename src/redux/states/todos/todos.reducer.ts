import { Reducer } from "redux";
import { TaskType } from "../../../types";
import { SET_ERROR, SET_LOADING, SET_SUCESS, TodosApiActionTypes } from "./todosApi.actions";
import {
    TodosListActionTypes,
    ADD_TODO_TO_LIST,
    ADD_TODOS_TO_LIST,
    SET_TODOS_TO_LIST,
    REMOVE_TODO_FROM_LIST,
    RESET_TODOS_LIST,
} from "./todosList.actions";

export interface TodosState {
    todos: TaskType[];
    isLoading: boolean;
    isLoaded: boolean;
    error?: Error;
}

const initState: TodosState = {
    todos: [],
    isLoading: false,
    isLoaded: false,
};

export const todosReducer: Reducer<TodosState, TodosListActionTypes | TodosApiActionTypes> = (state = initState, action) => {
    switch (action.type) {
        case RESET_TODOS_LIST:
            return initState;

        case SET_LOADING:
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
                error: undefined,
            }

        case SET_SUCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
            }

        case SET_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false,
                isLoaded: false,
            }

        case ADD_TODO_TO_LIST:
            return {
                ...state,
                todos: [...state.todos, action.todo],
            };

        case ADD_TODOS_TO_LIST:
            return {
                ...state,
                todos: [...state.todos, ...action.todos],
            };

        case SET_TODOS_TO_LIST:
            return {
                ...state,
                todos: action.todos,
            };

        case REMOVE_TODO_FROM_LIST:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            };

        default:
            return {
                ...state,
            };
    }
};
