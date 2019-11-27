import React from 'react';
import * as MSG from '../../constants/message';
import CartItem from './shopping-cart-item';
// import CartResult from './cartResult';
import ProductsPageContainer from '../product-page/product-page-container';

class ShoppingCart extends React.Component {
  render(){
	  //cart lấy trên store
	var { cart } = this.props;
    return (
        <div className="cart-page">
			<div className="container">
				<table className="table table-content">
					<thead>
						<tr>
						<th colSpan="3">Sản phẩm</th>
						<th></th>
						<th></th>
						<th>Đơn giá</th>
						<th>số lượng</th>
						<th>Thành tiền</th>
						<th>Thao tác</th>
						</tr>
					</thead>
					<tbody>
						{this.showCartItem(cart)}
					</tbody>
				</table>		
				
				<table className="table tbl-result">
					<tbody className="pull-right">
						<tr>
							<td></td>
							<td>
								<h4>
									<strong>Tổng Tiền</strong>
									<span>({this.showAllQuantity(cart)} sản phẩm)</span>
								</h4>
							</td>
							<td>
								<strong className="txt-price">{this.showAllTotal(cart)}</strong>
							</td>
							<td>
								<button type="submit" className="btn-cart">
									Mua hàng
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
        </div>
    );
  }
  showAllTotal=(cart)=>{
	var total = 0;
	if(cart.length>0){
		for(var i=0; i< cart.length; i++){
			//lấy giá từng phần tử * số lượng và cộng dồn lại
			total +=cart[i].product.price*cart[i].quantity
		} 
	}
	return total;
  }
  showAllQuantity=(cart)=>{
	var allQuantity = 0;
	if(cart.length>0){
		for(var i=0; i< cart.length; i++){
			//lấy số lượng từng phần tử cộng dồn lại
			allQuantity +=cart[i].quantity
		} 
	}
	return allQuantity
  }
  showCartItem =(cart) => {
	var result = MSG.MSG_CART_EMPTY;
	if(cart.length>0){
		result = cart.map((item, index)=>{
			return (
				
				<CartItem
					key={index}
					index={index}
					product={item}
					>
				</CartItem>
			
			)
		})
	}
	return result;
  }
}

export default ShoppingCart;
