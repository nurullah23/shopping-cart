import React from 'react';
import '../styles/App.scss';
import CartItemList from '../containers/CartItemList.js';
import Coupon from '../containers/Coupon.js';
import Checkout from '../containers/Checkout.js';

const App = () => (
    <div className="App">
        <CartItemList />
        <Coupon />
        <Checkout />
    </div>
);

export default App;
