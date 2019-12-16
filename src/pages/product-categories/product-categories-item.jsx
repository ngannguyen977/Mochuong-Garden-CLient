import React from 'react';
import './categories.css';
class ProductCategoriesItem extends React.Component {
  render(){
    var {category} = this.props;
    // console.log("item", product)
    
    return (
      
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <a className="product-categories-item"
        // onClick ={()=>setCategory(category)}
        >
             <img className="img-responsive" src={category.image}/>
             <div>
              <h4>{category.name}</h4>
              <h5 className="quantity">{category.quantity}+</h5>
             </div>
           </a>
      </div>

    );
  }

}

export default ProductCategoriesItem;
