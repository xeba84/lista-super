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

    render() {
        return (
            <div
                ref={(d) => this.myDiv = d}
                style={{ width: '80%', margin: '0 auto', overflowY: 'auto', height: '72%', }}
            >
                {this.renderList()}
            </div>
        );
    }

    componentDidUpdate() {
        this.myDiv.scrollTop = this.myDiv.scrollHeight;
        this.scrollToNewProduct();
    }

    renderList = () => {
        const { products } = this.props;
        const productLst = products.map((product, index) =>
            this.renderItem(product, index));
        return (
            productLst.length > 0 &&
            <List dense>
                <Divider />
                {productLst}
            </List>
        );
    };

    renderItem = (product, index) => {
        const { newProduct } = this.props;
        if (product === newProduct) {
            return (
                <div key={product} ref={(litem) => this.LItemRef = litem} style={{backgroundColor:"#f5f5f5"}}>
                   {this.getListItem(product, index)}
                </div>
            );
        }
        else {
            return (
                <div key={product}>
                   {this.getListItem(product, index)}
                </div>
            );
        }
    };

    getListItem(product, index) {
        const { onRemoveProduct } = this.props;
        return (
            <ListItem divider={true}>
                <ListItemAvatar>
                    <Avatar>
                        <AddShoppingCart />
                    </Avatar>
                </ListItemAvatar>
                <label style={{ fontFamily: 'Roboto' }}>&nbsp;{product}</label>
                <ListItemSecondaryAction>
                    <IconButton onClick={() => onRemoveProduct(index)} aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }

    scrollToNewProduct() {
        if (this.LItemRef) {
            this.LItemRef.scrollIntoView({ block: "end", behavior: "instant" });
        }
    }
}

ProductList.propTypes = {
    onRemoveProduct: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    newProduct: PropTypes.string.isRequired,
};

export default ProductList;