import _ from "lodash";
import { createSelector } from "reselect";
import { getDiscountFactor } from './couponSelectors';

export const getCart = state => state.cart || {};

export const getTotalAmount = createSelector(
    getCart,
    (cart) => _.reduce(cart, (sum, { price, quantity }) => sum + (price * quantity), 0)
);

export const getDiscountedTotal = createSelector(
    getTotalAmount,
    getDiscountFactor,
    (total, discountFactor) => _.round(total * discountFactor, 2)
);