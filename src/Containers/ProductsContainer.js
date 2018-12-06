import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import ProductAdd from '../components/ProductAdd';
import InfoMessage from '../components/Message/InfoMessage';
import './../styles/Container.css';
import { addProduct, showInfoMessage, removeProduct, apiLoadBaseProducts } from '../actions/index';
import { InfoMessages } from '../constants/messages';
import TabRouter from './../components/TabRouter';
import Spinner from './../components/Spinner';

class ProductsContainer extends Component {

    componentDidMount() {
        const { apiLoadBaseProducts, products } = this.props;
        if (products && products.length === 0) {
            apiLoadBaseProducts();
        }        
    }
    
    render() {
        const { products, infoMessage, onInfoMessageClose, removeProduct, isLoadingData } = this.props;       
        return (
            !isLoadingData ?
            <div className="Container">
                <ProductList onRemoveProduct={removeProduct} products={products} />
                <ProductAdd onAddProduct={this.handleAddProduct} />
                <InfoMessage onInfoMessageClose={onInfoMessageClose} message={infoMessage} />           
                <TabRouter path={this.props.match.path} />                
            </div>
            :
            <Spinner isLoading={isLoadingData} size={30} message="Cargando..."/>
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
        isLoadingData: state.loadingMessages.isLoadingData,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addProduct: text => { dispatch(addProduct(text)) },
        removeProduct: index => { dispatch(removeProduct(index)) },
        showInfoMessage: message => { dispatch(showInfoMessage(message)) },
        onInfoMessageClose: () => { dispatch(showInfoMessage("")) },
        apiLoadBaseProducts: () => { dispatch(apiLoadBaseProducts()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);