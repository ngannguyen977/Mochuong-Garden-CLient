import React from 'react';
import './categories.css';
class ProductCategoriesItem extends React.Component {
  render(){
    var {product} = this.props;
    console.log("item", product)
    return (
      
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="product-categories-item">
             <img className="img-responsive" src={product.image}/>
             <div>
              <h4>{product.name}</h4>
              <h5 className="quantity">{product.quantity}+</h5>
             </div>
           </div>
      </div>

    );
  }

}

export default ProductCategoriesItem;
