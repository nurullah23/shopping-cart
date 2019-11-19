import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import historyReducer from './historyReducer';
import couponReducer from './couponReducer';

export default combineReducers({
  cart: cartReducer,
  history: historyReducer,
  coupon: couponReducer,
});
