import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  return (
    <Fragment>
      <section className={styles["login-main-wrapper"]}>
        <div className={styles["main-container"]}>
          <div className={styles["login-process"]}>
            <div className={styles["login-main-container"]}>
              <div className={styles["thankyou-wrapper"]}>
                <h1>
                  <img
                    src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
                    alt="thanks"
                  />
                </h1>
                <p>
                  for ordering from us, we will get in touch with you soon...{" "}
                </p>
                <Link to="/">Back to home</Link>
                <div className={styles.clr}></div>
              </div>
              <div className={styles.clr}></div>
            </div>
          </div>
          <div className={styles.clr}></div>
        </div>
      </section>
    </Fragment>
  );
};

export default ThankYou;
