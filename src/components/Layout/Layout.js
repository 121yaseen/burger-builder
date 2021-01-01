import React from "react";

import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from '../Navigation/ToolBar/ToolBar';

const layout = (props) => {
	return (
		<Auxiliary>
			<div><Toolbar /></div>
			<main className={classes.Content}>
				{props.children}
			</main>
		</Auxiliary>
	);
};

export default layout;
