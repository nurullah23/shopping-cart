import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    total: PropTypes.number,
    gotoCheckout: PropTypes.func
}

const defaultProps = {
    total: 0,
    gotoCheckout: () => {}
}

const Checkout = ({ total, gotoCheckout }) => (
    <div>
        <h4>Checkout</h4>
        <p>Total amount: &euro; {total}</p>
        <button disabled={total === 0} onClick={gotoCheckout}>Go to Checkout</button>
    </div>
);

Checkout.propTypes = propTypes;
Checkout.defaultProps = defaultProps;

export default Checkout;