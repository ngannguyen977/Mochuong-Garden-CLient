import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import logo from "../../img/main_logo.png";
import cart from "../../img/icon/cart.svg";
import fb from "../../img/icon/fb.svg";
import ship from "../../img/icon/ship.svg";
import "./menu.css"
const menus = [
  {
    name : 'Trang chính',
    to:'/',
    exact: true
  },
  {
    name : 'Các loại cây',
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
                <Link to={'/'} className="navbar-brand"><img className="img-responsive" src={logo} alt="" /></Link>
                <ul className="nav navbar-nav">
					{this.showMenus(menus)}
                </ul>
          	</div>
			  <div className="search">
				<div className="search-box">
					<form className="search-form">
						<input className="form-control" placeholder='' type='text' />
						<button className="btn btn-link search-btn">
							<i className="glyphicon glyphicon-search"></i>
						</button>
					</form>
				</div>
			</div>
		  	<div className="contact-socials">
				<ul>
					<li><img className="img-responsive" src={fb} alt="" /><span>Fanpage</span></li>
					<li><img className="img-responsive" src={ship} alt="" /><span>Vận chuyển</span></li>
					<li><img className="img-responsive" src={cart} alt="" /><span>Giỏ hàng</span></li>
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
