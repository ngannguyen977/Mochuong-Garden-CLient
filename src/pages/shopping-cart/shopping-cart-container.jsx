import {connect} from 'react-redux';
import ShoppingCart from './shopping-cart';
import { actGetProductPageListRequest } from '../product-page-reducer';


const mapStateToProps = state =>{
    return {
      cart : state.CartReducer
      
    }
   
}
// const mapDispatchToProps = dispatch =>{
//     return {
//         getProductPageListFromStore:(pageIndex, pageSize)=> dispatch(actGetProductPageListRequest(pageIndex, pageSize))
//     }
// }
export default connect(mapStateToProps, null)(ShoppingCart);