import React from 'react';
import './App.css';
import Menu from './share/menu/menu';
// import ProductsContainer from './pages/products/products-container';

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Menu />
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-info">Add product</button>
               {/* <ProductsContainer /> */}
            </div>
          </div>
          </div>
      </div>
    );
  }

}

export default App;
