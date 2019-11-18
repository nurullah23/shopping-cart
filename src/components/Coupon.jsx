import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/Coupon.scss';

const propTypes = {
    couponCode: PropTypes.string,
    discount: PropTypes.number,
    addCoupon: PropTypes.func,
    removeCoupon: PropTypes.func
}

const defaultProps = {
    amount: 0,
    chips: [],
    addCoupon: () => {},
    removeCoupon: () => {}
}

const Coupon = ({ couponCode, discount, addCoupon, removeCoupon }) => {
    const [code, setCode] = useState();
    const handleChange = (event) => {
        setCode(event.target.value);
    };
    const handleAddCoupon = () => {
        if (code) {
            addCoupon(code);
        }
    }

    return (
        <div className="coupon">
            <h4>Coupons</h4>
            {Boolean(discount) && (
                <div>
                    <span>Your discount of {discount}% is applied with coupon code: {couponCode}</span>
                    <span className="remove-icon" onClick={removeCoupon} title="Remove Coupon">
                        <FaTrashAlt />
                    </span>
                </div>
            )}
            {!discount && (
                <div>
                    <input
                        type="text"
                        value={code}
                        placeholder="Enter coupon code"
                        onChange={handleChange} />
                    <button onClick={handleAddCoupon}>Add Coupon</button>
                </div>
            )}
        </div>
    );
};

Coupon.propTypes = propTypes;
Coupon.defaultProps = defaultProps;

export default Coupon;