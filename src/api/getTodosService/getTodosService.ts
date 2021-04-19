import { TaskType } from "../../types";

export type GetTodosServiceType = TaskType[];

export const getTodosService = async (api: string): Promise<GetTodosServiceType> => {
  const resp = await fetch("/api/todos", {
    method: 'GET'
  })
  const data = await resp.json();
  return data.todos;
}
