import "./App.css";
import HomePage from "./components/Home/HomePage";
import Carts from "./components/Cart/Carts";
import { Fragment } from "react";
import { Route } from "react-router-dom";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/cart">
        <Carts />
      </Route>
      <Route path="/thankyou" exact>
        <ThankYou />
      </Route>
    </Fragment>
  );
}

export default App;
