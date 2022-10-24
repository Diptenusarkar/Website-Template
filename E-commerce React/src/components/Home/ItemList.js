import React, { Fragment, useRef, useState } from "react";
import styles from "./ItemList.module.css";
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import Button from "../UI/Button";
import Input from "../UI/Input";

const ItemList = (props) => {
  const [checked, setChecked] = useState(false);
  const amountInputRef = useRef();
  let cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const { id, images, name, price, size, stock } = props;
  const dispatch = useDispatch();
  const checkedHandler = (e) => {
    if (e.target.checked === true) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const addToCartHandler = () => {
    if (!checked) {
      return;
    }
    const enteredAmountString = amountInputRef.current.value;
    const enteredAmount = +enteredAmountString;
    console.log(enteredAmount);
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        images,
        quantity: enteredAmount,
        totalQuantity: cartQuantity + enteredAmount,
        // totalAmount: totalQuantity * price,
      })
    );
    // console.log(id);
  };

  return (
    <Fragment>
      <tbody>
        <tr>
          <td>
            <img className={styles.image} src={images} alt="" />
          </td>
          <td>{name}</td>
          <td>{size}</td>
          <td>INR {price}</td>
          {stock && <td className={styles.in_stock}>In Stock</td>}
          {!stock && <td className={styles.out_of_stock}>Out of Stock</td>}
          <td>
            <Input
              ref={amountInputRef}
              input={{
                id: "amount_" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1" /*props going to Input.js */,
              }}
            />
            <span>
              <Button onClick={addToCartHandler} className={styles.cartIcon}>
                <BsCartPlusFill />
              </Button>
            </span>
          </td>
          <td>
            {stock && (
              <input type="checkbox" name="" id="" onChange={checkedHandler} />
            )}
            {!stock && (
              <input
                type="checkbox"
                name=""
                id=""
                onChange={checkedHandler}
                disabled
              />
            )}
          </td>
        </tr>
      </tbody>
    </Fragment>
  );
};

export default ItemList;
