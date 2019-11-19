import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import CartItem from './CartItem.jsx';

const propTypes = {
    items: PropTypes.array,
    addItemToCart: PropTypes.func,
    removeItemFromCart: PropTypes.func,
    changeQuantity: PropTypes.func,
    emptyCart: PropTypes.func
}

const defaultProps = {
    items: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    changeQuantity: () => {},
    emptyCart: () => {}
}

const CartItemList = ({ items, addItemToCart, removeItemFromCart, changeQuantity, emptyCart }) => (
    <div className="cart-item-list">
        <h1>Shopping Cart</h1>
        {_.isEmpty(items) && (
            <p>Cart is empty!</p>
        )}
        {!_.isEmpty(items) && (
            <ul>
                {items.map((item, i) => (
                    <CartItem
                        item={item}
                        changeQuantity={changeQuantity}
                        removeItemFromCart={removeItemFromCart}
                        key={i} />
                ))}
            </ul>
        )}
        <button onClick={addItemToCart}>Add Item</button>
        {!_.isEmpty(items) && (
            <button onClick={emptyCart}>Empty Cart</button>
        )}
    </div>
)

CartItemList.propTypes = propTypes;
CartItemList.defaultProps = defaultProps;

export default CartItemList;
