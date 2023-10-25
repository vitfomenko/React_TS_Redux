import { useReducer } from './useReducer';
import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';

export const rootReducer = combineReducers({
	user: useReducer,
	todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
