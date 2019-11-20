import {connect} from 'react-redux';
import ProductsListPage from './product-page-list';
import "./product-page.css";
import { actGetProductPageListRequest } from '../product-page-reducer';

const mapStateToProps = state =>{
    return {
        products:state.productPageReducer.dataproducts
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getProductPageListFromStore:()=> dispatch(actGetProductPageListRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);
