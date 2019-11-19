import { connect } from 'react-redux';
import Checkout from '../components/Checkout';
import { getDiscountedTotal } from '../selectors/cartSelectors';

export const mapStateToProps = (state) => ({
  total: getDiscountedTotal(state),
});

// TODO Implement checkout
export const mapDispatchToProps = ({
  gotoCheckout: () => { alert('Successfull checkout'); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
