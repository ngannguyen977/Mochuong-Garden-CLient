import React from 'react';
import ProductPageItem from './product-page-item';
import "./product-page.css";

class ProductsListPage extends React.Component {
    //tao ra state
    constructor(props){
      super(props);
      this.state ={}
  }
  //goi len server trong lifecircle hook
  //sau khi render đầu tiên sẽ set lai state products trên constructor
  componentDidMount(){
    this.props.getProductPageListFromStore();
  }
  showProductPage =(products=[])=>{
        var result = null;
        if(products.length>0){
            result = products.map((product,index)=>{
                return <ProductPageItem 
                key={index}
                product ={product}
                />
            })
        }
        return result;
    }

    render(){
        var{products} = this.props
        return (
            <div className="container">
                {this.showProductPage(products)}
            </div>
        );
    }

}

export default ProductsListPage;
