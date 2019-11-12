import React from 'react';
import {connect} from 'react-redux';
import ProductPageList from './product-page-list';
import ProductPageItem from './product-page-item';
import "./product-page.css";

class ProductsPageContainer extends React.Component {
  render(){
    var {products} = this.props
    return (
        <div className="product-page-list">
            <ProductPageList>
                {this.showProductPage(products)}
            </ProductPageList>
        </div>
    );
  }
  showProductPage =(products)=>{
        var result = null;
        if(products.length>0){
            result = products.map((product,index)=>{
                return <ProductPageItem 
                key={index}
                product ={product}
                />
            })
        }
        return result;
  }

}
const mapStateToProps = state =>{
    return {
        products:state.productPageListReducer
    }
}
export default connect(mapStateToProps, null)(ProductsPageContainer);
