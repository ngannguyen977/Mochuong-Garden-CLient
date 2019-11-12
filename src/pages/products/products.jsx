import React from 'react';

class Products extends React.Component {
  render(){
    return (
        <div className="products">
            <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">List products</h3>
                    </div>
                    <div className="panel-body">
                <button type="button" className="btn btn-info">Add product</button>

                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>Ma SP</th>
                            <th>Ten</th>
                            <th>Gia</th>
                            <th>trang thai</th>
                            <th>action</th>
                          </tr>
                        </thead>
                        <tbody>
                           {this.props.children}
                        </tbody>
                      </table>

                    </div>
                </div>


              </div>
    );
  }

}

export default Products;
