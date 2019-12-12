import React from 'react';
import {connect} from 'react-redux';
import ProductCategories from './product-categories';
import {actGetProductCategoriesRequest} from './reducer'

const mapStateToProps = state =>{
    return {
        productCategories : state.productCategoriesReducer
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        getProductCategoriesFromStore:()=>{
            dispatch(actGetProductCategoriesRequest()
        )},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategories);
