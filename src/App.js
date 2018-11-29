import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import ProductsContainer from './containers/ProductsContainer';
import HomeContainer from './containers/HomeContainer';
import ListsContainer from './containers/ListsContainer';
import TabsContainer from './containers/TabsContainer';
import LoginContainer from './containers/LoginContainer';
import PrivateRoute from './components/PrivateRoute';
import './styles/App.css';

class AppTab extends Component {  
  render() {
    return (
      <div className="App">
        <h1 style={{ margin: "0px", padding: "0px" }}>APP BAR</h1>
        <TabsContainer/>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/Products" component={ProductsContainer} />
          <PrivateRoute path="/Lists" component={ListsContainer} />
          <Route path="/Login" component={LoginContainer} />
          <Route render={() => (<div><h2 style={{color:"red"}}>La página solicitada NO existe</h2></div>)}/>          
        </Switch>
      </div>
    )
  }
}

export default AppTab;
