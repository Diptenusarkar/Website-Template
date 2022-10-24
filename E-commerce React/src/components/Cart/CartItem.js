import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import styles from "./CartItem.module.css";
import { cartActions } from "../../Store/cartSlice";

const CartItem = (props) => {
  const { id, name, images, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  console.log(quantity);

  const addFromCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        quantity,
      })
    );
  };
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <tbody>
      <tr key={id}>
        <td>
          <img className={styles.image} src={images} alt="icons" />
        </td>
        <td>{name}</td>
        <td>{price}</td>
        <td className={styles.quantity}>
          <span>
            {" "}
            <Button onClick={addFromCartHandler} className={styles.button}>
              +
            </Button>
          </span>
          {quantity}{" "}
          <span>
            <Button onClick={removeFromCartHandler} className={styles.button}>
              -
            </Button>
          </span>
        </td>
        <td>{total}</td>
      </tr>
    </tbody>
  );
};

export default CartItem;
