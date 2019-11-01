import React from 'react';
import Home from './pages/home/home';
import Products from './pages/products/products';
import ProductActions from './pages/product-actions/productAddPage'

const routes = [
    {
        path: '/',
        exact: true,
        main:() =><Home />
    },
    {
        path: '/products',
        exact: false,
        main:() =><Products />
    },
    {
        path: '/products/:id/edit',
        exact: false,
        main:(match) =><Products match ={match} />
    },
    {
        path: '/product/add',
        exact: false,
        main:() =><ProductActions />
    },
    {
        path: '',
        exact: false,
        main:() =><notFound />
    },
    
]
export default routes;
// match khi có id trên URL