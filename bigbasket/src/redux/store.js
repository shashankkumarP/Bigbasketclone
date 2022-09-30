import {legacy_createStore,applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import { productReducer } from "./product/productReducer";
import {reducer} from "./reducer"

const rootreducer=combineReducers({
    reducer1:reducer,
    product:productReducer,
})
export const store =legacy_createStore(rootreducer,applyMiddleware(thunk))