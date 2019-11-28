import React from 'react';
import Home from './pages/home/home';
import NotFound from './pages/notfound/notfound';
import Products from './pages/products/products';
import ProductsContainer from './pages/products/products-container';
import ProductActions from './pages/product-actions/productAddPage';
import ShoppingCartRoute from './pages/shopping-cart/shopping-cart-container';
import ProductDetailContainer from './pages/product-detail/product-detail-container';

const routes = [
    {
        path: '/',
        exact: true,
        main:() =><Home />
    },
    {
        path: '/products',
        exact: false,
        main:({match}) =><ProductsContainer match={match}/>
    },
    {
        path: '/cart',
        exact: false,
        main:() =><ShoppingCartRoute.ShoppingCartContainer/>
    },
    {
        path: '/products/:id/edit',
        exact: false,
        main:({match}) =><Products match ={match} />
    },
    {
        path: '/productDetail/:id',
        exact: false,
        main:({match}) =><ProductDetailContainer match={match} />
    },
    {
        path: '/product/add',
        exact: false,
        main:() =><ProductActions />
    },
    {
        path: '',
        exact: false,
        main:() =><NotFound />
    },

]
export default routes;
// match khi có id trên URL