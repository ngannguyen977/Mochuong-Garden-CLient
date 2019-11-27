import {connect} from 'react-redux';
import ProductDetail from './product-detail';
import { actGetProductByIdRequest } from '../product-page-reducer';
import {actAddToCart} from '../shopping-cart/shopping-cart-reducer';
import {actAddMessage} from '../../share/messages/message-reducer';
import "./product-detail.css";

const mapStateToProps =(state)=>{
    console.log("state from store", state)

    return {
        //itemDetail này sẽ được gọi ở detail conponent
        itemDetail:state.productPageReducer.dataDetail || {}
    }
}
//chuyen ham thanh props de thuc thi action
const mapDispatchToProps = (dispatch, props) =>{
    return {
        onAddToCart:(product)=>{
            dispatch(actAddToCart(product,1))
        },
        getProductDetailFromStore:(id)=>{
            dispatch(actGetProductByIdRequest(id)
        )},
        onAddMessage:(message)=>{
            dispatch(actAddMessage(message)
        )}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)