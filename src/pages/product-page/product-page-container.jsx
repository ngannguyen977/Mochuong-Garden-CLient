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
        // su dung ham
        getProductPageListFromStore:(pageIndex, pageSize, categoryId)=> dispatch(actGetProductPageListRequest(pageIndex, pageSize,categoryId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);
