import React from 'react';
import classes from './SideDrawerToggleButton.module.css';

const sideDrawerToggleButton = (props) => (
    <div onClick={props.clicked} className={classes.DrawerToggle} >
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideDrawerToggleButton;