import React, { Fragment } from "react";
import Button from "../UI/Button";
import styles from "./Header.module.css";
import HeaderCart from "./HeaderCart";
import { GrPowerReset } from "react-icons/gr";

const Header = (props) => {
  const genderSelectHandler = (e) => {
    props.genderVal(e.target.value);
  };
  const sizeSelectHandler = (e) => {
    props.sizeVal(e.target.value);
  };

  const searchValueHandler = (event) => {
    props.search(event.target.value);
  };

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.left}>
          <select
            name="products"
            className={styles.products}
            onChange={genderSelectHandler}
          >
            <option value="select" placeholder="Select a category" disabled>
              Select a category
            </option>
            <option value="All">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
          <select
            name="size"
            className={styles.size}
            onChange={sizeSelectHandler}
          >
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="L">L</option>
            <option value="S">S</option>
            <option value="M">M</option>
          </select>
          <Button className={styles.button} onClick={props.reset}>
            <GrPowerReset /> <span>Reset</span>
          </Button>
        </div>
        <div className={styles.right}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search"
            onChange={searchValueHandler}
          />
          <HeaderCart />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
