import React from 'react';
import ProductPageItem from './product-page-item';
import "./product-page.css";

class ProductsListPage extends React.Component {
//     //tao ra state
    constructor(props){
      super(props);
      this.state ={}
  }

// chạy render đầu tiên ko có du lieu -> chạy vào didmount (gọi hàm getProductPageListFromStore đã dispatch trong container) 
//->call Api trong product-page-reducer -> render lại

 componentDidMount(){
     //goi len server trong lifecircle hook
   
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
        const pageSize=3
        var{products, pageIndex, totalPage} = this.props;
        
        let pagination =[]
        for(let i = 0; i < totalPage/pageSize; i++){
            pagination.push(<li key={i} classname={pageIndex===i? "active": "inactive"}>
                <a onClick={()=>this.props.getProductPageListFromStore(i, pageSize)}>{i+1}</a>
            </li>)
        }
        return (
            <div>
                <div className="container">
                    {this.showProductPage(products)}
                </div>
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        {pagination}
                    </ul>
                </nav>
            </div>
        );
    }

}

export default ProductsListPage;
