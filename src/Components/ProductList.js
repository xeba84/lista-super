import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = { productLst: props.productLst };
        this.myOnRemoveProduct = this.props.onRemoveProduct;
    }

    render() {
        return (
            <div 
                ref={(d) => this.myDiv = d}
                style={{ width: '80%', margin: '0 auto', overflowY:'auto', height:'75%', }}
            >                
                {this.renderList()}
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ productLst: nextProps.productLst });
    }
    

    componentDidUpdate(prevProps, prevState) {
        this.myDiv.scrollTop = this.myDiv.scrollHeight;        
    }

    renderList = () => {
        const productLst = this.state.productLst.map((product, index) => this.renderItem(product, index));
        return (
            productLst.length > 0 && 
            <List dense>
                <Divider />
                {productLst}
            </List>
        );
    };

    renderItem = (product, index) => {
        return (
            <ListItem key={product} divider={true}>
                <ListItemAvatar>
                    <Avatar>
                        <AddShoppingCart />
                    </Avatar>
                </ListItemAvatar>
                <label style={{ fontFamily: 'Roboto' }}>&nbsp;{product}</label>
                <ListItemSecondaryAction>
                    <IconButton onClick={() => this.myOnRemoveProduct(index)} aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    };
}

ProductList.propTypes = {
    onRemoveProduct: PropTypes.func.isRequired,
    productLst: PropTypes.array.isRequired
};

export default ProductList;