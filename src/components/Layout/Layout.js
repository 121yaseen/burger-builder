import React from "react";

import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
const layout = (props) => {
	return (
		<Auxiliary>
			<div>Sidedrawer, Navigation Bar, Backdrop</div>
			<main className={classes.Content}>
				<BurgerBuilder />
				{props.children}
			</main>
		</Auxiliary>
	);
};

export default layout;
