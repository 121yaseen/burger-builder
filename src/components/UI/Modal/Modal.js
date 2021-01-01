import React, { Component, Componrnt } from "react";
import classes from "./Modal.module.css";
import BackDrop from "../BackDrop/BackDrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.orderNowState !== this.props.orderNowState;
	}

	render() {
		return (
			<Auxiliary>
				<BackDrop
					show={this.props.orderNowState}
					clicked={this.props.backDropClicked}
				></BackDrop>
				<div
					className={classes.Modal}
					style={{
						transform: this.props.orderNowState
							? "translateY(0)"
							: "translateY(-100vh)",
						opacity: this.props.orderNowState ? "1" : "0",
					}}
				>
					{this.props.children}
				</div>
			</Auxiliary>
		);
	}
}

export default Modal;
