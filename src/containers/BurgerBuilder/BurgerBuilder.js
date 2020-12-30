import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
class BurgerBuilder extends Component {
	render() {
		return (
			<Auxiliary>
				<div>
					<Burger />
				</div>
				<div>Build Tools</div>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;
