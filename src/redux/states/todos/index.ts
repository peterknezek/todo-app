import { todoListActions } from "./todosList.actions"
import { todoApiActions } from "./todosApi.actions"
import { getTodos } from "./todos.effect"

export * from "./todos.reducer";
export const todoActions = {
    ...todoListActions,
    ...todoApiActions,
    getTodos,
};

