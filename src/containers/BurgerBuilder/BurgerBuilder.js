import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICE = {
	salad: 0.3,
	cheese: 0.6,
	bacon: 0.8,
	meat: 1.5,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			cheese: 0,
			meat: 0,
			bacon: 0,
			salad: 0,
		},
		totalPrice: 4,
		purchasable: false,
		ordering: false,
	};

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

		this.setState({ purchasable: sum > 0 });
	}
	addIngredientHandler = (type) => {
		const oldValue = this.state.ingredients[type];
		const updatedValue = oldValue + 1;
		const oldPrice = this.state.totalPrice;
		const updatedPrice = oldPrice + INGREDIENT_PRICE[type];

		const oldState = { ...this.state };
		oldState.ingredients[type] = updatedValue;
		oldState.totalPrice = updatedPrice;
		this.setState(oldState);
		this.updatePurchasableState(oldState.ingredients);
	};

	removeIngredientHandler = (type) => {
		const oldValue = this.state.ingredients[type];
		if (oldValue <= 0) {
			return;
		}
		const updatedValue = oldValue - 1;
		const oldPrice = this.state.totalPrice;
		const updatedPrice = oldPrice - INGREDIENT_PRICE[type];

		const oldState = { ...this.state };
		oldState.ingredients[type] = updatedValue;
		oldState.totalPrice = updatedPrice;
		this.setState(oldState);
		this.updatePurchasableState(oldState.ingredients);
	};
	backDropClickedHandler = () => {
		this.setState({ ordering: false });
	};
	purchaseSuccessHandler = () => {
		alert("Purchase Success");
	}
	render() {
		let disabledInfo = {
			...this.state.ingredients,
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Auxiliary>
				<div>
					<Burger ingredients={this.state.ingredients} />
				</div>
				<Modal
					orderNowState={this.state.ordering}
					backDropClicked={this.backDropClickedHandler}
				>
					<OrderSummary
						ingredients={this.state.ingredients}
						cancel={this.backDropClickedHandler}
						success={this.purchaseSuccessHandler}
					/>
				</Modal>
				<BuildControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					disabledInfo={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordernow={this.orderNowHandler}
				/>
				<br></br>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;
