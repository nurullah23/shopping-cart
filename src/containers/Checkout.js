import React from 'react';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout.jsx';
import { getDiscountedTotal } from '../selectors/cartSelectors';

export const mapStateToProps = (state) => ({
    total: getDiscountedTotal(state)
});

//TODO Implement checkout
export const mapDispatchToProps = ({
    gotoCheckout: () => { alert('Successfull checkout') }
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
