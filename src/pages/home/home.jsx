import React from 'react';
import banner from "../../img/main-banner.jpg";
import ProductCategoriesContainer from '../product-categories/product-categories-container';
import ProductsPageContainer from '../product-page/product-page-container';

class Home extends React.Component {
  render(){
    return (
        <div className="home-page">
            <div className="banner"></div>
            <div className= "container">
				<img className="img-responsive" src={banner} alt="" />
				<div className ="product-categories">
						<ProductCategoriesContainer />
				</div>
				<div>
					<ProductsPageContainer />
				</div>
            </div>
        </div>
    );
  }
  

}

export default Home;
