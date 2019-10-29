import React from 'react';

class Home extends .React.Component {
  render(){
    return (
        <div className="menu">
            <div className="navbar">
                <a className="navbar-brand">call API</a>
                <ul className="nav navbar-nav">
                <li className="active">
                    <a>Home</a>
                </li>
                <li>
                    <a>Products</a>
                </li>
                </ul>
          </div>
        </div>
    );
  }

}

export default Home;
