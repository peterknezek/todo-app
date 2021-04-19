import { Action, ActionCreator } from "redux";

export const SET_LOADING = "[TODO] SET_LOADING";
export const SET_SUCESS = "[TODO] SET_SUCESS";
export const SET_ERROR = "[TODO] SET_ERROR";

export const setLoading: ActionCreator<SetLoading> = () => ({
    type: SET_LOADING,
});

interface SetLoading extends Action {
    type: typeof SET_LOADING;
}

export const setSucess: ActionCreator<SetSucess> = () => ({
    type: SET_SUCESS,
});

interface SetSucess extends Action {
    type: typeof SET_SUCESS;
}


export const setError: ActionCreator<SetError> = (error: Error) => ({
    type: SET_ERROR,
    error,
});

interface SetError extends Action {
    type: typeof SET_ERROR;
    error: Error;
}

export type TodosApiActionTypes =
    | SetLoading
    | SetSucess
    | SetError;

export const todoApiActions = {
    setLoading,
    setSucess,
    setError,
};
