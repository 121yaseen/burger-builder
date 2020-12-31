import React from "react";

import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";
import Auxiliary from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
	const orderIngredients = Object.keys(props.ingredients).map((ingKey) => {
		return (
			<li key={ingKey}>
				<span style={{ textTransform: "capitalize" }}>{ingKey}</span> :{" "}
				{props.ingredients[ingKey]}
			</li>
		);
	});

	return (
		<Auxiliary>
			<p>Your delicious burger contains :</p>
			<ul>{orderIngredients}</ul>
			<p>Continue to Checkout?</p>
			<p>
				<strong>Total Price : ${props.price.toFixed(2)}</strong>
			</p>
			<Button btnType="Danger" clicked={props.cancel}>
				Cancel
			</Button>
			<Button btnType="Success" clicked={props.success}>
				Checkout
			</Button>
		</Auxiliary>
	);
};

export default orderSummary;
