import React, { Component } from 'react';
import { GridLoader } from 'react-spinners';
import ProductsContainer from './containers/ProductsContainer';
import './App.css';

class App extends Component {

  render() {
    const { loadingMessages } = this.props;
    if (!loadingMessages.isLoadingData) {
      return (
        <div className="App">
          <ProductsContainer />
        </div>
      )
    } else {
      return (
        <div class="center">
            <GridLoader
              size={40}
              color={'#123abc'}
              loading={true}
            />
            <h2>Cargando...</h2>
        </div>
      )
    }
  }
}

export default App;
