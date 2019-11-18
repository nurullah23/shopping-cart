import { ACTION_ADD_COUPON, ACTION_REMOVE_COUPON } from "../actions/constants";

export default (state = {}, { type, payload }) => {
    switch (type) {
        case ACTION_ADD_COUPON:
            return {
                ...payload
            };

        case ACTION_REMOVE_COUPON:
            return {
                code: "",
                discount: 0
            };

        default:
            return state;
    }
}
