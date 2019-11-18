import React from 'react';
import {Link} from 'react-router-dom';

class ProductsPageItem extends React.Component {
    
  render(){
    var {product} = this.props
    return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 product-page-item">
               <Link to={'/productDetail/'+product.id}>
                <img className="img-responsive" src={product.image} />
                <h4>{product.name}</h4>
                <p>{product.des}</p>
               </Link>
            </div>
           
    );
  }

}

export default ProductsPageItem;
