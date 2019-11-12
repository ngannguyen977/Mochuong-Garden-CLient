import React from 'react';

class ProductsListPage extends React.Component {
  render(){
    return (
        <div className="container">
            {this.props.children}
        </div>
    );
  }

}

export default ProductsListPage;
