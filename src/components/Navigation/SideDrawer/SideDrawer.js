import React from "react";
import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/BackDrop/BackDrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const sideDrawer = (props) => {
	let sideDrawerClass = [classes.SideDrawer, classes.Close];

	if(props.show) {
		sideDrawerClass = [classes.SideDrawer, classes.Open]
	}


	return (
		<Auxiliary>
			<BackDrop show={props.show} clicked={props.clicked} />
			<div className={sideDrawerClass.join(' ')}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Auxiliary>
	);
};

export default sideDrawer;
