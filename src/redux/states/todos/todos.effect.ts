import { Dispatch } from "redux";
import { getTodosService } from "../../../api";
import { ApplicationState, ThunkExtraArgument } from "../..";
import { setError, setLoading, setSucess } from "./todosApi.actions";
import { setTodosToList } from "./todosList.actions";

/**
 * Get Todos From API
 */
export const getTodos = () => {
  return (dispatch: Dispatch, _getState: ApplicationState, { api }: ThunkExtraArgument) => {
    dispatch(setLoading())
    return getTodosService(api).then(
      (resp) => {
        dispatch(setSucess())
        dispatch(setTodosToList(resp))
      },
      (error) => dispatch(setError(error)),
    )
  };
}