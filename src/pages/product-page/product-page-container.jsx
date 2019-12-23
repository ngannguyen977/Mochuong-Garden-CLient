import {connect} from 'react-redux';
import ProductsListPage from './product-page-list';
import "./product-page.css";
import { actGetProductPageListRequest } from '../product-page-reducer';
// import { actAddToCart } from '../shopping-cart/shopping-cart-reducer';

const mapStateToProps = state =>{
    return {
        products:state.productPageReducer.dataproducts,
        totalPage:state.productPageReducer.totalPage
        
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        //sử dung hàm actGetProductPageListRequest phải theo đúng thứ tự tham số truyền vào lúc tạo
        getProductPageListFromStore:()=> dispatch(actGetProductPageListRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);
