import {combineReducers} from 'redux';
import productReducer from './../pages/products/products-reducer';
import productCategoriesReducer from './../pages/product-categories/reducer';
import productPageListReducer from './../pages/product-page/product-page-reducer';
import ProductPageDetailReducer from './../pages/product-detail/product-detail-reducer';


const appReducer  = combineReducers({
    productReducer,
    productCategoriesReducer,
    productPageListReducer,
    ProductPageDetailReducer
});
export default appReducer;