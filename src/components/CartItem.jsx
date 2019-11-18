import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/CartItem.scss';

const propTypes = {
    item: PropTypes.object,
    changeQuantity: PropTypes.func,
    removeItemFromCart: PropTypes.func
}

const defaultProps = {
    item: {},
    changeQuantity: () => {},
    removeItemFromCart: () => {}
}

const CartItem = ({ item: {id, name, quantity, price}, removeItemFromCart, changeQuantity }) => {
    const handleChange = (event) => {
        changeQuantity(id, event.target.value);
    };
    const handleRemove = () => {
        removeItemFromCart(id);
    };

    return (
        <li className="cart-item">
            
                <span className="item-name">{name}</span>
                <input
                    type="number"
                    defaultValue={quantity}
                    min={1}
                    max={1000}
                    onChange={handleChange} />
                <span className="remove-icon" onClick={handleRemove} title="Remove Item">
                    <FaTrashAlt />
                </span>
                <span className="item-price">&euro; {_.round(quantity * price, 2)}</span>
            
        </li>
    );
};

CartItem.propTypes = propTypes;
CartItem.defaultProps = defaultProps;

export default CartItem;
