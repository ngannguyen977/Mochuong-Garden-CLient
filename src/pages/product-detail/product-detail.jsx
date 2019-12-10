import React from 'react';
import * as Message from '../../constants/message';
import {Link } from 'react-router-dom';
import MessageContainer from '../../share/messages/message-container';
import "../product-page/product-page.css";
import "./product-detail.css";


class ProductDetail extends React.Component {

  
    onShowMessage=(message)=>{
        this.props.onAddMessage(message);
    }
    
    componentDidMount(){
        // lấy id trên URL để show detail của id đó
        let id = this.props.match.params.id
        this.props.getProductDetailFromStore(id)
        
    }
    
    render() {
        let {itemDetail} = this.props;
        let canBuy = itemDetail.quantity > 0;
        console.log("lấy props", this.props)
        return (
           <div className="container">
                <div className="product-item-detail">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <Link to={'/'} classname="back-to-home">Về trang chủ</Link>
                    <img className="img-responsive" src={itemDetail.image}/>
                    <h3>{itemDetail.name}</h3>
                    <p>{itemDetail.des}</p>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="card-right">
                        <table className="table tbl-product-detail">
                            
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
                        { canBuy ? <a className="btn btn-green"
                        onClick={()=>this.onAddToCart(itemDetail)}
                        >Mua Hàng</a> : <span className="lbl-action">SẢN PHẨM HẾT HÀNG</span>}
                        
                    </div>
                </div>
                <div className="clearfix"></div>
                <MessageContainer />
            </div>
           </div>
        );
    }
    // bấm váo button sẽ gọi tới props
    // props này có nhiệm vụ là kết nối lên store
    // ->dispatch cái action thay đồi message
    onAddToCart =(product)=>{
        this.props.onAddToCart(product)
        this.onShowMessage(Message.MSG_ADD_SUCCESS)
    }

}

export default ProductDetail;
