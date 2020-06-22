import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const initialState = {};

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
)

export * from './sidebar/action';
export * from './modal/action';