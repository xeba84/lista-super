import React, { Component } from 'react';
import ProductsContainer from './Containers/ProductsContainer';
import './App.css';

class App extends Component {    
  
  render() {    
    return (
      <div className="App">        
        <ProductsContainer />
      </div>
    );
  }
}

export default App;
