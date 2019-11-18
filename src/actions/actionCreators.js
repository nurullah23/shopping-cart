import _ from 'lodash';
import {
    ACTION_ADD_ITEM,
    ACTION_REMOVE_ITEM,
    ACTION_ADD_TO_HISTORY,
    ACTION_EMPTY_CART,
    ACTION_CHANGE_QUANTITY,
    ACTION_ADD_COUPON,
    ACTION_REMOVE_COUPON
} from './constants'
import { getRandomItem } from '../utils/getData';

const createHistoryAction = (event) => {
    return {
        type: ACTION_ADD_TO_HISTORY,
        payload: {
            event,
            eventTime: _.now()
        }
    };
}

export const addItemToCart = () => dispatch => {
    // Get random item
    const item = getRandomItem();
    const action = {
        type: ACTION_ADD_ITEM,
        payload: item
    };

    dispatch(action);
    dispatch(createHistoryAction(action));
}

export const removeItemFromCart = (id) => dispatch => {
    const action = {
        type: ACTION_REMOVE_ITEM,
        payload: id
    };

    dispatch(action);
    dispatch(createHistoryAction(action));
}

export const emptyCart = () => dispatch => {
    const action = {
        type: ACTION_EMPTY_CART
    };

    dispatch(action);
    dispatch(createHistoryAction(action));
}

export const changeQuantity = (id, quantity) => dispatch => {
    const action = {
        type: ACTION_CHANGE_QUANTITY,
        payload: {
            id,
            quantity
        }
    };

    dispatch(action);
    dispatch(createHistoryAction(action));
}

export const addCoupon = (code) => dispatch => {
    //TODO Get discount amount from backend
    dispatch({
        type: ACTION_ADD_COUPON,
        payload: {
            code,
            discount: 5 * _.random(1, 14)
        }
    })
}

export const removeCoupon = () => dispatch => {
    dispatch({
        type: ACTION_REMOVE_COUPON
    });
}
