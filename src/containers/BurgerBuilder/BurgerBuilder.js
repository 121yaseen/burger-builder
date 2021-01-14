import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../../store/actions";

import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";

const INGREDIENT_PRICE = {
  salad: 0.3,
  cheese: 0.6,
  bacon: 0.8,
  meat: 1.5,
};

class BurgerBuilder extends Component {
  state = {
    // totalPrice: 4,
    // purchasable: false,
    ordering: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios.get("/ingredients.json").then((response) => {
      this.setState({ ingredients: response.data });
    });
  }
  orderNowHandler = () => {
    this.setState({ ordering: true });
  };

  updatePurchasableState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    // this.setState({ purchasable: sum > 0 });
    return sum > 0;
  }
  // addIngredientHandler = (type) => {
  //   const oldValue = this.state.ingredients[type];
  //   const updatedValue = oldValue + 1;
  //   const oldPrice = this.state.totalPrice;
  //   const updatedPrice = oldPrice + INGREDIENT_PRICE[type];

  //   const oldState = { ...this.state };
  //   oldState.ingredients[type] = updatedValue;
  //   oldState.totalPrice = updatedPrice;
  //   this.setState(oldState);
  //   this.updatePurchasableState(oldState.ingredients);
  // };

  // removeIngredientHandler = (type) => {
  //   const oldValue = this.state.ingredients[type];
  //   if (oldValue <= 0) {
  //     return;
  //   }
  //   const updatedValue = oldValue - 1;
  //   const oldPrice = this.state.totalPrice;
  //   const updatedPrice = oldPrice - INGREDIENT_PRICE[type];

  //   const oldState = { ...this.state };
  //   oldState.ingredients[type] = updatedValue;
  //   oldState.totalPrice = updatedPrice;
  //   this.setState(oldState);
  //   this.updatePurchasableState(oldState.ingredients);
  // };
  backDropClickedHandler = () => {
    this.setState({ ordering: false });
  };
  purchaseSuccessHandler = () => {
    // const queryParams = [];
    // for (let k in this.state.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(k) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredients[k])
    //   );
    // }
    // const queryString = queryParams.join("&");
    // this.props.history.push({
    //   pathname: "/checkout",
    //   search: "?" + queryString + "&price=" + this.props.price.toFixed(2),
    // });
    this.props.history.push("/checkout");
  };
  // resetHandler = () => {
  //   this.setState({
  //     ingredients: {
  //       cheese: 0,
  //       meat: 0,
  //       bacon: 0,
  //       salad: 0,
  //     },
  //     totalPrice: 4,
  //     purchasable: false,
  //     ordering: false,
  //   });
  // };
  render() {
    let disabledInfo = {
      ...this.props.ing,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = <Spinner />;
    if (this.props.ing) {
      burger = <Burger ingredients={this.props.ing} />;
      orderSummary = (
        <OrderSummary
          price={this.props.price}
          ingredients={this.props.ing}
          cancel={this.backDropClickedHandler}
          success={this.purchaseSuccessHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Auxiliary>
        <div>{burger}</div>
        <Modal
          orderNowState={this.state.ordering}
          backDropClicked={this.backDropClickedHandler}
        >
          {orderSummary}
        </Modal>
        <BuildControls
          addIngredient={this.props.addIngredientHandler}
          removeIngredient={this.props.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.props.price}
          // purchasable={this.state.purchasable}
          purchasable={this.updatePurchasableState(this.props.ing)}
          ordernow={this.orderNowHandler}
          // reset={this.resetHandler}
        />
        <br></br>
      </Auxiliary>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredientHandler: (type) =>
      dispatch({ type: actionType.ADD_INGREDIENT, ingType: type }),
    removeIngredientHandler: (type) =>
      dispatch({ type: actionType.REMOVE_INGREDIENT, ingType: type }),
  };
};

const mapStateToProps = (state) => {
  return {
    ing: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));

// export default withErrorHandler(BurgerBuilder, axios);
