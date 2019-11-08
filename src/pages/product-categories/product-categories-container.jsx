import React from 'react';
import {connect} from 'react-redux';
import ProductCategories from './product-categories';
import ProductCategoriesItem from './product-categories-item';

class ProductCategoriesContainer extends React.Component {
  render(){
    //   console.log('product', products)
    var {productCategories} = this.props;
    console.log("co san pham chua",this.props)
    return (
        <div>
            <ProductCategories>
                {this.showProductCategories(productCategories)}
            </ProductCategories>
        </div>
    );
  }

  showProductCategories(productCategories){
    var result = null;
    if(productCategories.length>0){
        result = productCategories.map((product,index)=>{
            return <ProductCategoriesItem 
                key={index}
                product = {product}
            />
        })
    }
    return result;
}
}

const mapStateToProps = state =>{
    return {
        productCategories : state.productCategoriesReducer
    }
}
export default connect(mapStateToProps, null)(ProductCategoriesContainer);
