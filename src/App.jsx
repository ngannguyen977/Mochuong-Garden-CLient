import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './share/menu/menu';
import routes from './routes';

class App extends React.Component {
  render(){
    return (
        // error <Route> và <Route>
      <Router>
        <div className="App">
          <Menu />
            <Switch>
                {this.showContentMenus(routes)}
            </Switch>
      </div>
      </Router>
    );
  }
    showContentMenus = (routes) =>{
        let result = null;
        if(routes.length>0){
            result = routes.map((route, index)=>{
                return (
                    <Route 
                        key ={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            })
        }
        return result;

    }
}

export default App;
