import React from 'react';
import {connect} from 'react-redux';
import Products from './products';
import ProductItem from './productItem';

class ProductsContainer extends React.Component {
  render(){
    
    var {products} = this.props;
    console.log(products)
    return (
        <div>
            <Products>
                {this.showProducts(products)}
            </Products>
        </div>
    );
  }

  showProducts(products){
    var result = null;
    if(products.length>0){
        result = products.map((product,index)=>{
            return <ProductItem 
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
        products : state.productReducer
    }
}
export default connect(mapStateToProps, null)(ProductsContainer);
