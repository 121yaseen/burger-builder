import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  // state = {
  //   ingredients: {
  //     bacon: 1,
  //     cheese: 1,
  //     salad: 1,
  //     meat: 1,
  //   },
  //   totalPrice: null,
  // };
  // componentDidMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   for (let param of query.entries()) {
  //     if (param[0] === "price") {
  //       this.setState({ totalPrice: +param[1] });
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }
  //   this.setState({ ingredients: ingredients });
  // }
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <React.Fragment>
        <CheckoutSummary
          ingredients={this.props.ing}
          price={this.props.price}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component = {ContactData}
          // render={(props) => (
          //   <ContactData
          //     ingredients={this.state.ingredients}
          //     price={this.state.totalPrice}
          //     {...props}
          //   />
          // )}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ing : state.ingredients,
    price : state.totalPrice
  }
}


export default connect(mapStateToProps)(Checkout);
