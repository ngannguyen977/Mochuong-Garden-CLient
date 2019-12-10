import React from 'react';
import {Link} from 'react-router-dom';

class ProductPageItem extends React.Component {
    
  render(){
    //nhận prop từ product list
    var {item} = this.props;
    // console.log("item quantity",item.quantity)
    let canBuy = item.quantity > 0;
    return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 product-page-item">
               <Link to={'/productDetail/'+item.id}>
                    <img className="product-img img-responsive" src={item.image} />
                    <h4>{item.name}</h4>
                    <p>{item.des}</p>
                    <div className="box-bottom">
                        <span className="price"><p>{item.price}</p></span>
                        <div className="fl-right">
                          { canBuy ? <button className="btn btn-green">MUA HÀNG</button> : <span className="lbl-action">HẾT HÀNG</span>}
                        </div>
                    </div>
               </Link>
              
            </div>
           
    );
  }
  

}

export default ProductPageItem;
