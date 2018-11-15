import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import ProductAdd from '../components/ProductAdd';
import InfoMessage from '../components/Message/InfoMessage';
import './Container.css';
import { addProduct, showInfoMessage, removeProduct } from '../actions/index';
import { InfoMessages } from '../constants/messages'

class ProductsContainer extends Component {

    render() {
        const { products, infoMessage, onInfoMessageClose, removeProduct } = this.props;       
        return (
            <div className="Container">
                <ProductList onRemoveProduct={removeProduct} products={products} />
                <ProductAdd onAddProduct={this.handleAddProduct} />
                <InfoMessage onInfoMessageClose={onInfoMessageClose} message={infoMessage} />           
            </div>
        );
    }

    handleAddProduct = (text) => {
        var res = false;
        const { products, addProduct, showInfoMessage } = this.props;
        if (text) {
            if (products.indexOf(text) < 0) {
                addProduct(text);
            res = true;            
            } else {
                showInfoMessage(InfoMessages.MSG_DUPLICATED_PRODUCT);
            }
        } else {
            showInfoMessage(InfoMessages.MSG_EMPTY_PRODUCT);
        }
        return res;        
    };

    handleRemoveProduct = (index) => {
        const { removeProduct } = this.props;
        removeProduct(index);
    };    
}

const mapStateToProps = state => {
    return {
        products: state.products,
        infoMessage: state.popUpMessages.infoMessage,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addProduct: text => { dispatch(addProduct(text)) },
        removeProduct: index => { dispatch(removeProduct(index)) },
        showInfoMessage: message => { dispatch(showInfoMessage(message)) },
        onInfoMessageClose: () => { dispatch(showInfoMessage("")) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);