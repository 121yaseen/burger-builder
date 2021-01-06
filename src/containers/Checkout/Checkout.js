import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      bacon: 1,
      cheese: 1,
      salad: 1,
      meat: 1,
    },
  };

  buttonClickedHandler() {}

  render() {
    return (
      <React.Fragment>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          buttonClicked={this.buttonClickedHandler}
        />
      </React.Fragment>
    );
  }
}

export default Checkout;
