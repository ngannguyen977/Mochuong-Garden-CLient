import {connect} from 'react-redux';
import ShoppingCart from './shopping-cart';
import CartItem from './shopping-cart-item';
import actDeleteInCart, { actUpdateQuantity } from './shopping-cart-reducer'
// import { actGetProductPageListRequest } from '../product-page-reducer';


const mapStateToProps = state =>{
  //map với cart trong reducers/index
    // props cart này có ds các san pham trong gio hang
    return {
      cart : state.CartReducer
    }
   
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
      //action trong reducer có tham số là product
      //tại đây cũng truyền ts là product
      // chuyền props onDeleteProductInCart có ts product 
      // cho cartItem nơi chứa nút delete tại phương thức onDeleteCart()
        onDeleteProductInCart : (product)=>{
        //dispatch action có ts là product
            dispatch(actDeleteInCart(product))
        },
        onUpdateProductQuantity:(product,quantity)=>{
            dispatch(actUpdateQuantity(product, quantity))
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart, CartItem);