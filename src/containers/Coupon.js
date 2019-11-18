import React from 'react';
import { connect } from 'react-redux';
import Coupon from '../components/Coupon.jsx';
import { addCoupon, removeCoupon } from '../actions/actionCreators';
import { getCouponCode, getDiscountPercentage } from '../selectors/couponSelectors';

export const mapStateToProps = (state) => ({
    couponCode: getCouponCode(state),
    discount: getDiscountPercentage(state)
});

export const mapDispatchToProps = ({
    addCoupon,
    removeCoupon
});

export default connect(mapStateToProps, mapDispatchToProps)(Coupon);
