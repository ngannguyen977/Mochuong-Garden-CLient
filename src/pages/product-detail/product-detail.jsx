import React from 'react';

class ProductDetail extends React.Component {
    componentDidMount(){
        // lấy id trên URL để show detail của id đó
        let id = this.props.match.params.id
        this.props.getProductDetailFromStore(id)
        console.log("lấy param id", this.props)
    }
    render() {
        let {itemDetail} = this.props
        return (
            <div className="product-item-detail">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <img className="img-responsive" src={itemDetail.image}/>
                    <h3>{itemDetail.name}</h3>
                    <p>{itemDetail.des}</p>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="card-right">
                        <table className="table">
                            
                            <thead>THÔNG TIN SẢN PHẨM</thead>
                            
                            <tbody>
                                <tr>
                                    <td>Mã SP</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Đặc tính</td>
                                    <td>Ưa nắng</td>
                                </tr>
                                <tr>
                                    <td>Giá bán</td>
                                    <td>2000</td>
                                </tr>
                                <tr>
                                    <td>Chiều Cao</td>
                                    <td>30cm</td>
                                </tr>
                                <tr>
                                    <td>Tình Trạng</td>
                                    <td>3 cây</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }

}

export default ProductDetail;
