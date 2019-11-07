import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';

const menus = [
  {
    name : 'Home',
    to:'/',
    exact: true
  },
  {
    name : 'Products',
    to:'/products',
    exact: false
  },
]
const MenuLink = ({label,to, acticOnlyWhenExact})=>{
  return (
		<Route 
		path ={to}
		exact={acticOnlyWhenExact}
		children={({match})=>{
			var active = match ? 'active' :'';
			return (
				<li className ={active}>
					<Link to={to}>
						{label}
					</Link>
				</li>
			)
		}}
		/>
  )
}
class Menu extends React.Component {
  render(){
    return (
        <div className="menu">
            <div className="navbar">
                <a className="navbar-brand">call API</a>
                <ul className="nav navbar-nav">
					{this.showMenus(menus)}
                </ul>
          </div>
        </div>
    );
  	}
	showMenus = (menus)=>{
		var result = null;
		if(menus.length>0){
			result = menus.map((menu,index)=>{
				return (
					<MenuLink 
						key={index}
						label={menu.name}
						to={menu.to}
						acticOnlyWhenExact={menu.exact}
					/>
				)
			})
		}
		return result
	}
}

export default Menu;
