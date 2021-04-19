import thunkMiddleware from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todosReducer } from "../states/todos";


const rootReducer =  combineReducers({
    todos: todosReducer,
});
export type ApplicationState = ReturnType<typeof rootReducer>;
export type ThunkExtraArgument = { api: string };

const middlewares = [thunkMiddleware.withExtraArgument({ api: process.env.API })];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(rootReducer, composedEnhancers);

export default store;
