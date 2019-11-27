import {combineReducers} from 'redux';
import productReducer from './../pages/products/products-reducer';
import productCategoriesReducer from './../pages/product-categories/reducer';
import productPageReducer from './../pages/product-page-reducer';
import CartReducer from '../pages/shopping-cart/shopping-cart-reducer';
import MessageReducer from '../share/messages/message-reducer';

const appReducer  = combineReducers({
    productReducer,
    productCategoriesReducer,
    productPageReducer,
    CartReducer,
    MessageReducer
});
export default appReducer;