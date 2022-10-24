import React, { Fragment, useState } from "react";
import data from "../../DUMMY_DATA";
import ItemList from "./ItemList";
import Container from "../UI/Container";
import styles from "./Homepage.module.css";
import Header from "./Header";

const HomePage = () => {
  const [items, setItems] = useState(data);

  const genderHandler = (cat) => {
    // console.log(cat);
    const result = data.filter((curCat) => {
      return curCat.category === cat;
    });
    setItems(result);
  };

  const sizeHandler = (size) => {
    const sizes = data.filter((curSize) => {
      return curSize.size === size;
    });
    setItems(sizes);
  };

  const resetHandler = () => {
    setItems(data);
  };

  const searchHandler = (search) => {
    const filter = data.filter((val) => {
      return val.name.toLowerCase().includes(search);
    });
    setItems(filter);
  };

  const availableItems = items.map((products) => {
    return (
      <ItemList
        key={products.id}
        id={products.id}
        images={products.image}
        name={products.name}
        price={products.price}
        category={products.category}
        size={products.size}
        stock={products.inStock}
        quantity={products.quantity}
      />
    );
  });

  return (
    <Fragment>
      <Container className="container">
        <Header
          genderVal={genderHandler}
          sizeVal={sizeHandler}
          defaultValueGender="Select a category"
          reset={resetHandler}
          search={searchHandler}
        />
        <table className="table">
          <thead className={styles.thead}>
            <tr>
              <th scope="col">Images</th>
              <th scope="col">Name</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Buy</th>
            </tr>
          </thead>

          {availableItems}
        </table>
      </Container>
    </Fragment>
  );
};

export default HomePage;
