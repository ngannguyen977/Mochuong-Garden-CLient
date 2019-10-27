import React, { Component } from 'react';
import ProductItem from './productItem'

class Products extends Component {
  render(){
    return (
        <div className="products">

            <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">List products</h3>
                    </div>
                    <div className="panel-body">

                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>STT</th>
                            <th>Ma SP</th>
                            <th>Ten</th>
                            <th>Gia</th>
                            <th>trang thai</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody>
                            <ProductItem></ProductItem>
                        </tbody>
                      </table>

                    </div>
                </div>


              </div>
    );
  }

}

export default Products;
