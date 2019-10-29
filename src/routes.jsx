import React from 'react';
import Products from './pages/products/products';
import ProductItem from './pages/products/productItem'

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
        path: '',
        exact: false,
        main:() =><notFound />
    },
    
]
export default routes;