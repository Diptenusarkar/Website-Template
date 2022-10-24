import React, { Fragment } from "react";
import CartCheckout from "./CartCheckout";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { FaRegSadCry } from "react-icons/fa";

const Carts = () => {
  const cartList = useSelector((state) => state.cart.items);
  console.log(cartList);
  return (
    <Fragment>
      <div className="container text-center">
        <div className="row">
          <div className="col-8">
            <table className="table ">
              <thead className={styles.thead}>
                <tr>
                  <th scope="col" className={styles.head_row}>
                    Image
                  </th>
                  <th scope="col" className={styles.head_row}>
                    Product
                  </th>
                  <th scope="col" className={styles.head_row}>
                    Price
                  </th>
                  <th scope="col" className={styles.head_row}>
                    Quantity
                  </th>
                  <th scope="col" className={styles.head_row}>
                    Subtotal
                  </th>
                </tr>
              </thead>

              {cartList.map((item) => {
                console.log(item);
                return (
                  <CartItem
                    key={item.id}
                    item={{
                      id: item.id,
                      name: item.name,
                      images: item.images,
                      quantity: item.quantity,
                      total: item.totalPrice,
                      price: item.price,
                    }}
                  />
                );
              })}
            </table>
            {cartList.length === 0 && (
              <div className={styles.empty}>
                <span className={styles.empty_icon}>
                  <FaRegSadCry />
                </span>
                Oops,Your cart is empty
              </div>
            )}
          </div>
          <div className="col">
            <CartCheckout />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Carts;
