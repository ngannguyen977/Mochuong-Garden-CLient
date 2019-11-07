import React from 'react';
import banner from "../../img/main-banner.jpg";
import ProductCategories from '../product-categories/product-categories'

class Home extends React.Component {
  render(){
    return (
        <div className="home-page">
            <div className="banner"></div>
            <div className= "container">
				<img className="img-responsive" src={banner} alt="" />
				<div classname ="product-categories">
					<ProductCategories />
				</div>
            </div>
        </div>
    );
  }

}

export default Home;
