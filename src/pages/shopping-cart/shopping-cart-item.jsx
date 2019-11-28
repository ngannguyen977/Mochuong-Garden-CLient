import React, { Component } from 'react';
import './shopping-cart.css';

class CartItem extends Component {
    render() {
        var {product} = this.props;
        var{quantity} = product;
        console.log("cart item", product)
        return (
                <tr>
                    <td><input type="checkbox" className="" /></td>
                    <td><img className="img-cart img-responsive" src={product.product.image} /></td>
                    <td>{product.product.name}</td>
                    <td>{product.product.price}</td>
                    <td>
                        
                        
                        <div className="quantity">
                            <button className="minus-quantity"
                             onClick = {()=>this.onUpdateQuantity(product.product, product.quantity -1)}>
                                <i className="fas fa-minus"></i>
                               
                            </button>
                           
                            <input className="txt-quantity" type="text" value={product.quantity} />
                            <button className="add-quantity"
                            onClick = {()=>this.onUpdateQuantity(product.product, product.quantity +1)}
                            >
                                <i className="fas fa-plus"></i>
                                
                            </button>
                        </div>
                    </td>
                    <td>{this.showTotal(product.product.price, product.quantity)}</td>
                    <td>
                        <div className="action">
                            <button className="btn"
                            onClick = {()=>this.onDeleteCart(product.product)}
                            >
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
    onDeleteCart = (product)=>{
        console.log("click xóa", product)
        var {onDeleteProductInCart} = this.props;
        if(product>0){
            onDeleteProductInCart(product)
        }
    }
    onUpdateQuantity=(product, quantity)=>{
        var {onUpdateProductQuantity} = this.props
        if(quantity>0){
            onUpdateProductQuantity(product, quantity);
        }

    }
}

export default CartItem;
