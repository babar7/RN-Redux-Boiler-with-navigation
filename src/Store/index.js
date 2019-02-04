import SignInReducer from './reducers/SignInReducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    SignInReducer,
    {},
    applyMiddleware(thunk)
);

export default store;