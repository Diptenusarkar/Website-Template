import React, { Fragment } from "react";
import styles from "./HeaderCart.module.css";
import { ImCart } from "react-icons/im";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderCart = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log(cartQuantity);
  return (
    <Fragment>
      <Link to="/cart">
        <Button className={styles.button}>
          {cartQuantity >= 0 ? cartQuantity : 0}
          <span className={styles.cartButton}>
            <ImCart />
          </span>
        </Button>
      </Link>
    </Fragment>
  );
};

export default HeaderCart;
