import React from 'react';

class ProductCategoriesItem extends React.Component {
  render(){
    var {product} = this.props;
    console.log("item", product)
    return (
      
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="product-categories-item">
             <img className="img-responsive" src={product.image}/>
             <h2>{product.name}</h2>
           </div>
      </div>

    );
  }

}

export default ProductCategoriesItem;
