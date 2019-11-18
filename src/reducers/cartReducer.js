import _ from 'lodash';
import { ACTION_ADD_ITEM, ACTION_REMOVE_ITEM, ACTION_EMPTY_CART, ACTION_CHANGE_QUANTITY } from "../actions/constants";

export default (state = {}, { type, payload }) => {
    switch (type) {
        case ACTION_ADD_ITEM:
            if (_.some(state, ['id', payload.id])) {
                return state.map(item => (item.id !== payload.id)
                    ? item
                    : {
                        ...item,
                        quantity: item.quantity + payload.quantity
                    });
            }
            else {
                return [
                    ...state,
                    payload
                ];
            }

        case ACTION_REMOVE_ITEM:
            return _.filter(state, (item) => item.id !== payload)

        case ACTION_EMPTY_CART:
            return [];

        case ACTION_CHANGE_QUANTITY:
            return state.map(item => (item.id !== payload.id)
                ? item
                : {
                    ...item,
                    quantity: payload.quantity
                });

        default:
            return state;
    }
}
