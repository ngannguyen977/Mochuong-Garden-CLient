import React, {Component} from 'react';
import './App.css';
import Menu from './share/menu/menu';
import Products from './pages/products/products';

class App extends Component {
  render(){
    return (
      <div className="App">

          <Menu></Menu>
          <div className="container">

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <button type="button" className="btn btn-info">Add product</button>
                <Products></Products>
            </div>

          </div>

          </div>
      </div>
    );
  }

}

export default App;
