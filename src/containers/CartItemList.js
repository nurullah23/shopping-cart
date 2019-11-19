import { connect } from 'react-redux';
import CartItemList from '../components/CartItemList';
import {
  addItemToCart,
  removeItemFromCart,
  changeQuantity,
  emptyCart,
} from '../actions/actionCreators';
import { getCart } from '../selectors/cartSelectors';
import { getDiscountPercentage } from '../selectors/couponSelectors';

export const mapStateToProps = (state) => ({
  items: getCart(state),
  discount: getDiscountPercentage(state),
});

export const mapDispatchToProps = ({
  addItemToCart,
  removeItemFromCart,
  changeQuantity,
  emptyCart,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItemList);
