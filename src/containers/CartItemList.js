import React from 'react';
import { connect } from 'react-redux';
import CartItemList from '../components/CartItemList.jsx';
import { addItemToCart, removeItemFromCart, changeQuantity, emptyCart } from '../actions/actionCreators';
import { getCart } from '../selectors/cartSelectors';
import { getDiscountPercentage } from '../selectors/couponSelectors.js';

export const mapStateToProps = (state) => ({
    items: getCart(state),
    discount: getDiscountPercentage(state)
});

export const mapDispatchToProps = ({
    addItemToCart,
    removeItemFromCart,
    changeQuantity,
    emptyCart
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItemList);
