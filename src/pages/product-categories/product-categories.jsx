import React from 'react';
import ProductCategoriesItem from './product-categories-item'

class ProductCategories extends React.Component {

  componentDidMount(){
      console.log('test',this.props)
      this.props.getProductCategoriesFromStore()
  }
  showProductCategories= (productCategories=[])=>{
    var result = null;
    if(productCategories.length>0){
        result = productCategories.map((category,index)=>{
            return <ProductCategoriesItem 
                key={index}
                category = {category}
            />
        })
    }
    return result;
}

  render(){
    var {productCategories} = this.props;

    return (
        <div className="product-categories">
            <div className= "container">
              <div className="flex-content">
              <ProductCategories>
                  {this.showProductCategories(productCategories)}
              </ProductCategories>
              </div>
            </div>
        </div>
    );
  }

}

export default ProductCategories;
