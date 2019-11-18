import { ACTION_ADD_TO_HISTORY } from "../actions/constants";

export default (state = [], { type, payload }) => {
    switch (type) {
        case ACTION_ADD_TO_HISTORY:
            return [
                ...state,
                payload
            ];

        default:
            return state;
    }
}
