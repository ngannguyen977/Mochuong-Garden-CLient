import React from 'react';

class ProductDetail extends React.Component {
    render() {
        var productItemDetail = this.props
        return (
            <div className="product-item-detail">
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <img className="img-responsive" src={productItemDetail.image}/>
                    <h3>{productItemDetail.name}</h3>
                    <p>{productItemDetail.des}</p>
                </div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    
                </div>
            </div>
        );
    }

}

export default ProductDetail;
