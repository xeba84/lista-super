import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class ProductAdd extends Component {
    render() { 
        return (
            <div style={{ position: 'fixed', bottom: '5px', width: '100%', height: '120px' }}>
                <div>
                    <TextField label="Producto" margin="normal" variant="outlined" autoFocus
                        inputProps={{ maxLength: 20 }}
                        onChange={this.handleChange}
                        inputRef={field => this.txtProducto = field}
                        onPaste={e => e.preventDefault()}
                        onKeyPress={this.handleKeyPress}
                    />
                </div>
                <div>
                    <Button color="primary" variant="contained" size="medium"
                        onClick={this.handleOnclickAdd}>
                        Agregar
                    </Button>
                </div>
            </div>
        );
    };

    handleOnclickAdd = (e) => {
        const newProduct = this.txtProducto.value;
        const { onAddProduct } = this.props
        if (onAddProduct(newProduct)){
            this.txtProducto.value = "";
        }
        this.txtProducto.select();
        this.txtProducto.focus();
    };

    handleKeyPress = event => {
        if (event.key === "Enter") {
            this.handleOnclickAdd();
        }
    };

    handleChange = (e) => {
        this.txtProducto.value = this.titleCase(e.target.value);
    };

    titleCase = (str) => {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }
}

ProductAdd.propTypes = {
    onAddProduct: PropTypes.func.isRequired
};

export default ProductAdd;