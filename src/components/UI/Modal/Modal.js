import React from "react";
import classes from "./Modal.module.css";
import BackDrop from "../BackDrop/BackDrop";
import Auxiliary from "../../../hoc/Auxiliary";
const modal = (props) => {
	return (
		<Auxiliary>
			<BackDrop show={props.orderNowState} clicked={props.backDropClicked}></BackDrop>
			<div
				className={classes.Modal}
				style={{
					transform: props.orderNowState
						? "translateY(0)"
						: "translateY(-100vh)",
					opacity: props.orderNowState ? "1" : "0",
				}}
			>
				{props.children}
			</div>
		</Auxiliary>
	);
};

export default modal;
