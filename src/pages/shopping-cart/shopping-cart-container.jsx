import { connect } from 'react-redux';
import ShoppingCart from './shopping-cart';
import CartItem from './shopping-cart-item';
import actDeleteInCart, { actUpdateQuantity } from './shopping-cart-reducer'
// import { actGetProductPageListRequest } from '../product-page-reducer';
import Menu from "../../share/menu/menu";

const showAllQuantity = (cart = []) => {
  var allQuantity = 0;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      //lấy số lượng từng phần tử cộng dồn lại
      allQuantity += cart[i].quantity
    }
  }
  return allQuantity
}

const mapStateToProps = state => {
  //map với cart trong reducers/index
  // props cart này có ds các san pham trong gio hang
  let cart = state.CartReducer
  return {
    cart: cart,
    allQuantity: showAllQuantity(cart)
  }

}
const mapDispatchToProps = (dispatch, props) => {
  return {
    //action trong reducer có tham số là product
    //tại đây cũng truyền ts là product
    // chuyền props onDeleteProductInCart có ts product
    // cho cartItem nơi chứa nút delete tại phương thức onDeleteCart()
    onDeleteProductInCart: (product) => {
      //dispatch action có ts là product
      dispatch(actDeleteInCart(product))
    },
    onUpdateProductQuantity: (product, quantity) => {
      dispatch(actUpdateQuantity(product, quantity))
    },
    showAllQuantity: (cart) => showAllQuantity(cart)

  }
}
export default {
  CartItemContainer: connect(mapStateToProps, mapDispatchToProps)(CartItem),
  ShoppingCartContainer: connect(mapStateToProps, mapDispatchToProps)(ShoppingCart),
  MenuContainer: connect(mapStateToProps, mapDispatchToProps)(Menu)
}