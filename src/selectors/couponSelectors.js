import { createSelector } from "reselect";

export const getCoupon = state => state.coupon || {};

export const getCouponCode = createSelector(
    getCoupon,
    ({ code }) => code
);

export const getDiscountPercentage = createSelector(
    getCoupon,
    ({ discount }) => discount
);

export const getDiscountFactor = createSelector(
    getDiscountPercentage,
    (discount) => 1 - (discount / 100)
);
