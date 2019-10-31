import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var {product} = this.props;
        var statusText = product.status ? 'còn hàng' : 'hết hàng';
        var statusClass=product.status? 'warning' : 'default'
        return (
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        {/* //es6 */}
                        <span className={`label label-${statusClass}`}>
                            {statusText}
                        </span>
                    </td>
                    <td>
                        <button type="button" className="btn btn-success">
                            edit
                        </button>
                        <button type="button" className="btn btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
        );
    }

}

export default ProductItem;
