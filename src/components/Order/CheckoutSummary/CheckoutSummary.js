import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1 align="center">Hope this burger tastes well!!!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <span style={{fontSize:30}}><strong>Total Price : $ {props.price}</strong></span>
      <br></br>
      <Button clicked={props.checkoutCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.checkoutContinued} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
