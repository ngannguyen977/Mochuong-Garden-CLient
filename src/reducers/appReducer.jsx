import {combineReducers} from 'redux';
import productReducer from './../pages/products/products-reducer';

const appReducer  = combineReducers({
    productReducer
});
export default appReducer;