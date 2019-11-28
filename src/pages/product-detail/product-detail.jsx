import React from 'react';
import * as Message from '../../constants/message';
import MessageComponent from '../../share/messages/message'

class ProductDetail extends React.Component {
    componentDidMount(){
        // lấy id trên URL để show detail của id đó
        let id = this.props.match.params.id
        this.props.getProductDetailFromStore(id)
        
    }
    render() {
        let {itemDetail} = this.props;
        // console.log("lấy props", onAddMessage)
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
                        <a className="btn"
                        onClick={()=>this.onAddToCart(itemDetail)}
                        >Mua Hàng</a>
                    </div>
                </div>
                <div className="clearfix"></div>
                <MessageComponent />
            </div>
        );
    }
    // bấm váo button sẽ gọi tới props
    // props này có nhiệm vụ là kết nối lên store
    // ->dispatch cái action thay đồi message
    onAddToCart =(product)=>{
        this.props.onAddToCart(product)
        this.props.onAddMessage(Message.MSG_ADD_SUCCESS)
    }

}

export default ProductDetail;
