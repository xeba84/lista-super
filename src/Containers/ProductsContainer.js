import React, { Component } from 'react';
import ProductList from '../Components/ProductList';
import ProductAdd from '../Components/ProductAdd';
import InfoMessage from '../Components/Message/InfoMessage';
import './Container.css';

const productLst = ["Pan", "Leche", "Galletitas", "Puré", "Arroz", "Yoghurt", "Tapa De Tarta"];

class ProductsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productLst: productLst.sort(this.sortProductList),
            product: "",
            showEmptyMessage: false,
            showExistMessage: false,
        };
    }

    render() {
        //console.log(this.state);
        return (
            <div className="Container">
                <ProductList onRemoveProduct={this.onRemoveProduct} productLst={this.state.productLst} />
                <ProductAdd onAddProduct={this.onAddProduct} product={this.state.product} />
                <InfoMessage showMessage={this.state.showEmptyMessage} message="Por Favor Escriba un Nombre de Producto" />
                <InfoMessage showMessage={this.state.showExistMessage} message="El Producto ya Existe" />
            </div>
        );
    }

    onAddProduct = (text) => {
        if (text) {
            if (this.state.productLst.indexOf(text) < 0) {
                var newProductList = this.state.productLst.slice();
                newProductList.push(text);
                newProductList.sort(this.sortProductList);
                this.setState({ product: "", showEmptyMessage: false, showExistMessage: false, productLst: newProductList });
            } else {
                this.setState({ product: text, showEmptyMessage: false, showExistMessage: true });    
            }
        } else {
            this.setState({ showEmptyMessage: true, showExistMessage: false, product: "" });
        }
    };

    onRemoveProduct = (index) => {
        var newProductList = this.state.productLst.slice();        
        newProductList.splice(index,1);
        this.setState({ productLst: newProductList, showEmptyMessage: false, showExistMessage: false, });
    };

    sortProductList = (a,b) => (a<b) ? -1 : 1;
}

export default ProductsContainer;