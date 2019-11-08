import {combineReducers} from 'redux';
import productReducer from './../pages/products/products-reducer';
import productCategoriesReducer from './../pages/product-categories/reducer';

const appReducer  = combineReducers({
    productReducer,
    productCategoriesReducer
});
export default appReducer;