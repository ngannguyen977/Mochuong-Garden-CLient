import React from 'react';
import {connect} from 'react-redux';
import ProductCategories from './product-categories';
import ProductCategoriesItem from './product-categories-item';
import {actGetProductCategoriesRequest} from './reducer'

class ProductCategoriesContainer extends React.Component {
    componentDidMount(){
        console.log('test',this.props)
        this.props.getProductCategoriesFromStore()
    }
  render(){
   
    var {productCategories} = this.props;
    console.log('product category', productCategories)
    return (
        <div>
            <ProductCategories>
                {this.showProductCategories(productCategories)}
            </ProductCategories>
        </div>
    );
  }

  showProductCategories(productCategories){
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
}

const mapStateToProps = state =>{
    return {
        productCategories : state.productCategoriesReducer
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        getProductCategoriesFromStore:()=>{
            dispatch(actGetProductCategoriesRequest()
        )},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoriesContainer);
