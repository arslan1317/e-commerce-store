import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducers'


const initialState = {};
const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;