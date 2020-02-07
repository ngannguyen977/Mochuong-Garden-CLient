import { connect } from 'react-redux';
import ShoppingCart from './shopping-cart';
import CartItem from './shopping-cart-item';
import { actUpdateQuantity, actDeleteInCart } from './shopping-cart-reducer'
import {actDeleteMessage} from '../../share/messages/message-reducer'
// import { actGetProductPageListRequest } from '../product-page-reducer';
import Menu from "../../share/menu/menu";

const showAllQuantity = (cart=[]) => {
  var allQuantity = 0;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      //lấy số lượng từng phần tử cộng dồn lại
      allQuantity += cart[i].quantity
    }
  }
  return allQuantity
}

const mapStateToProps = (state) => {
  // tham số state này nằm trong store
  //map với cart trong reducers/index
  // props cart này có ds các san pham trong gio hang
  let cart = state.CartReducer
  return {
    // key(props để sd): cart trái
    // value: cart phải
    // ở đâu ta có cart là 1 props lên store lấy ds các cart về
    cart: cart,
    // cart: state.CartReducer
    allQuantity: showAllQuantity(cart)
  }

}
const mapDispatchToProps = (dispatch, props) => {
  return {
    //action trong reducer có tham số là product
    //tại đây cũng truyền ts là product
    // chuyền props onDeleteProductInCart có ts product để xđ product nào sẽ xóa
    // cho cartItem nơi chứa nút delete tại phương thức onDeleteCart()
    onDeleteProductInCart: (product) => {
      //dispatch action có ts là product
      dispatch(actDeleteInCart(product))
    },
    onConfirmDelete:(message)=>{
      dispatch(actDeleteMessage(message))
      setTimeout(() => {
          dispatch(actDeleteMessage(""))
      },5000)// run this func after 2 seconds
    },
    onUpdateProductQuantity: (product, quantity) => {
      dispatch(actUpdateQuantity(product, quantity))
    },
    showAllQuantity: (cart) => {showAllQuantity(cart)
    // or  showAllQuantity: (cart) => {dispatch(showAllQuantity(cart))}
  }
}
}
export default {
  CartItemContainer: connect(mapStateToProps, mapDispatchToProps)(CartItem),
  ShoppingCartContainer: connect(mapStateToProps, mapDispatchToProps)(ShoppingCart),
  MenuContainer: connect(mapStateToProps, mapDispatchToProps)(Menu)
}