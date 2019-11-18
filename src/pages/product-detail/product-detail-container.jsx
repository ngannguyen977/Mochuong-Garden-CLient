import React from 'react';
import {connect} from 'react-redux';
import ProductDetail from ''

class ProductDetailContainer extends  React.Component{
    render(){
        return(
            <ProductDetail></ProductDetail>
        )
    }

}
const mapStateToProps =(state)=>{
    return {
        productDetail:state.ProductPageDetailReducer
    }
}
//chuyen ham thanh props de thuc thi action
const mapDispatchToProps =dispatch=>{
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer)