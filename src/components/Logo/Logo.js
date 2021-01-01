import React from 'react';
import classes from './Logo.module.css';
import BurgerLogo from '../../assets/images/logo.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height : props.height}}>
    <img src={BurgerLogo} alt="My Burger Logo" />
    </div>
);

export default logo;