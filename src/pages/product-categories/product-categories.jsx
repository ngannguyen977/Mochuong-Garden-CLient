import React from 'react';

class ProductCategories extends React.Component {
  render(){
    return (
        <div className="">
            <div className= "container">
              <div className="flex-content">
              {this.props.children}
              </div>
            </div>
        </div>
    );
  }

}

export default ProductCategories;
