import { Routes } from "./types";

export const createRoute = {
    [Routes.detail]: (todoId: string) => `/${todoId}`,
}