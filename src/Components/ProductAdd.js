import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class ProductAdd extends Component {

    constructor(props) {
        //console.log("constructor");
        super(props);
        //this.myOnClik = this.props.onClickAdd.bind(this); //"Creo" que es lo mismo que lo de abajo
        this.myOnAddProduct = this.props.onAddProduct;      //Lo diferente con el de arriba sería la perdida de referencia al "this" si se le pasa a un hijo
        this.state = { product: this.titleCase(props.product) }
    };

    componentDidMount() {
        //console.log("componentDidMount");
    }
    
    componentWillReceiveProps(nextProps) {
        //console.log("componentWillReceiveProps");
        this.setState( { product: nextProps.product } );
    }    
    
    componentDidUpdate(prevProps, prevState) {
        //console.log("componentDidUpdate");
        /*if (this.state.product !== this.props.product){
            console.log("cambio estado producto")
            this.setState({product:this.titleCase(this.props.product)});
        }*/
    }

    componentWillUnmount() {
        //console.log("componentWillUnmount");
    }

    render() { 
        //console.log("render");
        return (
            <div style={{ position: 'fixed', bottom: '5px', width: '100%', height: '120px' }}>
                <div>
                    <TextField label="Producto" margin="normal" variant="outlined" autoFocus
                        inputProps={{ maxLength: 20 }}
                        onChange={this.handleChange}
                        inputRef={field => this.txtProducto = field}
                        onPaste={e => e.preventDefault()}
                        onKeyPress={this.handleKeyPress}
                        value={this.state.product}
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

    handleOnclickAdd = () => {
        const {product} = this.state;
        this.myOnAddProduct(product);
        this.txtProducto.focus();
    };

    handleKeyPress = event => {
        if (event.key === "Enter") {
            this.handleOnclickAdd();
        }
    };

    handleChange = (e) => {
        //console.log("handleChange");
        this.setState({ product: this.titleCase(e.target.value) });
    };

    titleCase = (str) => {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }
}

ProductAdd.propTypes = {
    onAddProduct: PropTypes.func.isRequired,
    product: PropTypes.string.isRequired
};

export default ProductAdd;