import React, { Component } from 'react';
import './shopping-cart.css';

class CartItem extends Component {
    render() {
        var {product} = this.props;
        console.log("cart item", product)
        return (
                <tr>
                    <td><input type="checkbox" className="" /></td>
                    <td><img className="img-cart img-responsive" src={product.product.image} /></td>
                    <td>{product.product.name}</td>
                    <td>{product.product.price}</td>
                    <td>
                        
                        <div className="quantity">
                            <button className="add-quantity">
                                <i className="fas fa-plus"></i>
                            </button>
                            <input className="txt-quantity" type="text" value={product.quantity} />
                            <button className="minus-quantity">
                                <i className="fas fa-minus"></i>
                            </button>
                        </div>
                    </td>
                    <td>{this.showTotal(product.product.price, product.quantity)}</td>
                    <td>
                        <div className="action">
                            <button className="btn">
                               Xóa
                            </button>
                        </div>
                    </td>
                </tr>
        );
    }
    // nhan vao price va quantity
    showTotal = (price, quantity)=>{
        return price * quantity
    }

}

export default CartItem;
