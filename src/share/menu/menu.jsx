import React from 'react';
import { Route, Link } from 'react-router-dom';

class Menu extends React.Component {
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

export default Menu;
