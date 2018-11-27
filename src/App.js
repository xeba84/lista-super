import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ProductsContainer from './containers/ProductsContainer';
import HomeContainer from './containers/HomeContainer';
import ListsContainer from './containers/ListsContainer';
import TabsContainer from './containers/TabsContainer';
import './styles/App.css';

class AppTab extends Component {  
  render() {
    return (
      <div className="App">
        <h1 style={{ margin: "0px", padding: "0px" }}>APP BAR</h1>
        <TabsContainer/>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/Products" component={ProductsContainer} />
        <Route path="/Lists" component={ListsContainer} />
      </div>
    )
  }
}

export default AppTab;
