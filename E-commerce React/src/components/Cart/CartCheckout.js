import React from "react";
import { useSelector } from "react-redux";
import styles from "./CartCheckout.module.css";
import { Link } from "react-router-dom";

const CartCheckout = (props) => {
  // const { total } = props;
  const total = useSelector((state) => state.cart.totalAmount);
  console.log(total);

  return (
    <div className={`card ${styles.pay}`}>
      <div className="card-body">
        <h5 className="card-title fs-2 text-start pb-4">Cart Totals</h5>
        <h6
          className={`card-subtitle mb-2 text-muted fs-4 pt-2 ${styles.subtotal}`}
        >
          Subtotal <span>{total}</span>
        </h6>
        <hr />
        <p className={`card-text fs-4 pt-2 text-start `}>
          <h3 className={styles.total}>
            Total <span>{total}</span>
          </h3>
        </p>
        <Link to="/thankyou" className={styles.checkout}>
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartCheckout;
