import React from 'react';
import ProductPageItem from './product-page-item';
import "./product-page.css";

class ProductsListPage extends React.Component {
//     //tao ra state
//     constructor(props){
//       super(props);
//     //   this.state ={}
//   }

// chạy render đầu tiên ko có du lieu -> chạy vào didmount (gọi hàm getProductPageListFromStore đã dispatch trong container) 
//->call Api trong product-page-reducer -> render lại

 componentDidMount(){
     //goi len server trong lifecircle hook
    console.log("didmount")
    this.props.getProductPageListFromStore();
  }
  showProductPage =(products=[])=>{
        var result = null;
        if(products.length>0){
            result = products.map((item,index)=>{
                return <ProductPageItem 
                key={index}
                item ={item}
                //item này sẽ được nhận lại trong product item
                />
            })
        }
        return result;
    }

    render(){
        console.log("render")
        var{products} = this.props
        return (
            <div className="container">
                {this.showProductPage(products)}
            </div>
        );
    }

}

export default ProductsListPage;
