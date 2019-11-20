import {combineReducers} from 'redux';
import productReducer from './../pages/products/products-reducer';
import productCategoriesReducer from './../pages/product-categories/reducer';
import productPageReducer from './../pages/product-page-reducer';


const appReducer  = combineReducers({
    productReducer,
    productCategoriesReducer,
    productPageReducer,
});
export default appReducer;