import React, { Component } from 'react';
import ProductsContainer from './containers/ProductsContainer';
import Spinner from './components/Spinner';
import './App.css';

class App extends Component {

  //TODO: add {this.props.children} when implement react-router
  render() {
    return (
      <div className="App">
        <ProductsContainer />
        <Spinner />
      </div>
    )
  }
}

export default App;
