import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
	salad: 0.3,
	cheese: 0.6,
	bacon: 0.8,
	meat: 1.5,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			bacon: 0,
			meat: 0,
			cheese: 0,
			salad: 0,
		},
		totalPrice: 4,
	};

	addIngredientHandler = (type) => {
		const oldValue = this.state.ingredients[type];
		const updatedValue = oldValue + 1;
		const oldPrice = this.state.totalPrice;
		const updatedPrice = oldPrice + INGREDIENT_PRICE[type];

		const oldState = { ...this.state };
		oldState.ingredients[type] = updatedValue;
		oldState.totalPrice = updatedPrice;
		this.setState(oldState);
	};

	removeIngredientHandler = (type) => {
		const oldValue = this.state.ingredients[type];
		if(oldValue <= 0){
			return
		}
		const updatedValue = oldValue - 1;
		const oldPrice = this.state.totalPrice;
		const updatedPrice = oldPrice - INGREDIENT_PRICE[type];

		const oldState = { ...this.state };
		oldState.ingredients[type] = updatedValue;
		oldState.totalPrice = updatedPrice;
		this.setState(oldState);
	};

	render() {
		let disabledInfo ={
			...this.state.ingredients
		}

		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Auxiliary>
				<div>
					<Burger ingredients={this.state.ingredients} />
				</div>
				<BuildControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					disabledInfo={disabledInfo}
				/>
				{this.state.totalPrice}
				<br></br>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;
