import React from "react";
import classes from "./BackDrop.module.css";

const backdrop = (props) => (
	props.show ?  <div onClick={props.clicked} className={classes.BackDrop}></div> : null
);
export default backdrop;
