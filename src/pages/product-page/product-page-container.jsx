import React from 'react';
import {connect} from 'react-redux';
import ProductPageList from './product-page-list';
import ProductPageItem from './product-page-item';
import "./product-page.css";

class ProductsPageContainer extends React.Component {
    // componentWillMount(){
    //     this.props.getProductListPage();
    // }
  render(){
    // const PAGESIZE = 3;
    // var {products} = [];
    var {products, pageIndex, totalPage} = this.props;

    let pagination = []
    // for (let i = 0; i < totalPage/PAGESIZE; i++) {
    //     pagination.push(<li key={i} className={pageIndex === i ? "active" : "inactive"}>
    //             <a onClick={() => this.props.getProductListPage(i, PAGESIZE)}>{i+1}</a>
    //         </li>)
    // }
    return (
        <div className="product-page-list">
            <ProductPageList>
                {this.showProductPage(products)}
            </ProductPageList>
        </div>
    );
  }
  showProductPage =(products)=>{
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

}

// const mapDispatchToProps = dispatch =>{
//     return {
//         getProductListPage : (pageIndex, PageSize) =>dispatch(actGetProductsRequest(pageIndex, PageSize))
//     }
// }
const mapStateToProps = state =>{
    return {
        products:state.productPageListReducer
    }
}
export default connect(mapStateToProps, null)(ProductsPageContainer);
