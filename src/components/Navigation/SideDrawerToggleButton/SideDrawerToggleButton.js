import React from 'react';
import classes from './SideDrawerToggleButton.module.css';

const sideDrawerToggleButton = (props) => (
    <div onClick={props.clicked} className={classes.boxshadowmenu} > </div>
);

export default sideDrawerToggleButton;