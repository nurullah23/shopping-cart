import { combineReducers } from "redux";
import resultsReducer from './resultsReducer';
import cartReducer from './cartReducer';
import historyReducer from './historyReducer';
import couponReducer from './couponReducer';

export default combineReducers({
    results: resultsReducer,
    cart: cartReducer,
    history: historyReducer,
    coupon: couponReducer
});
