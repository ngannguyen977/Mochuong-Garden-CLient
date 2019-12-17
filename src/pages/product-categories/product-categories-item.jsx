import React from 'react';
import './categories.css';
class ProductCategoriesItem extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     categories:[],
  //     items: [],
  //     selectedCategoryId: null
  //   }
  // }
  // selectCategory =(category)=>{
  //   this.setState({
  //     selectedCategoryId: category
  //   });
  // }

  // truyền vào biến categoryId để lên store get về
  //tại container sẽ disptach 1 action chuyển thành 1 props cho categories Item xài
  onSelectedCategoryId = (categoryId) =>{
    console.log("click danh muc", categoryId)
    var {onShowCategoryById} = this.props
    onShowCategoryById(categoryId)
  }
  render(){
    var {category} = this.props;
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <a className="product-categories-item"
          onClick={()=> this.onSelectedCategoryId(category.categoryId)}
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
