import {connect} from 'react-redux';
import ProductDetail from './product-detail';
import { actGetProductByIdRequest } from '../product-page-reducer';
import "./product-detail.css";

const mapStateToProps =(state)=>{
    console.log("state from store", state)

    return {
        //itemDetail này sẽ được gọi ở detail conponent
        itemDetail:state.productPageReducer.dataDetail || {}
    }
}
//chuyen ham thanh props de thuc thi action
const mapDispatchToProps = dispatch =>{
    return {
        getProductDetailFromStore:(id)=>dispatch(actGetProductByIdRequest(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)