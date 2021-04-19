export enum Routes {
    home = "/",
    detail = "/:todoId",
}

export type RouteParams = {
    [Routes.detail]: {
        todoId: string
    }
};
