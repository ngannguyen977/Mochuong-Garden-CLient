import React from 'react';
import {Link} from 'react-router-dom';

class ProductPageItem extends React.Component {
    
  render(){
    //nhận prop từ product list
    var {item} = this.props
    console.log("produt item",this.props)
    return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 product-page-item">
               <Link to={'/productDetail/'+item.id}>
                    <img className="img-responsive" src={item.image} />
                    <h4>{item.name}</h4>
                    <p>{item.des}</p>
                    <div className="box-bottom">
                        <span className="price"><p>{item.price}</p></span>
                        <span className="lbl-action"></span>
                    </div>
               </Link>
              
            </div>
           
    );
  }

}

export default ProductPageItem;
