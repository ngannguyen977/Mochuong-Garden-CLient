import React from 'react';

class ProductCategories extends React.Component {
  render(){
    return (
        <div className="">
            <div className= "container">
              {this.props.children}
            </div>
        </div>
    );
  }

}

export default ProductCategories;
