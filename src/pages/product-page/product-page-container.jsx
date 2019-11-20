import {connect} from 'react-redux';
import ProductsListPage from './product-page-list';
import "./product-page.css";
import { actGetProductPageListRequest } from '../product-page-reducer';

const mapStateToProps = state =>{
    return {
        products:state.productPageReducer.dataproducts,
        totalPage:state.productPageReducer.totalPage
        
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getProductPageListFromStore:(pageIndex, pageSize)=> dispatch(actGetProductPageListRequest(pageIndex, pageSize))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);
