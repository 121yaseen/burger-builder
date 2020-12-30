import React from 'react';

import classes from './OrderSummary.module.css';
import Auxiliary from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
    const orderIngredients = Object.keys(props.ingredients).map((ingKey) => {
        return <li>{ingKey} : {props.ingredients[ingKey]}</li>
    })

    return(
        <Auxiliary>
            <p>Your delicious burger contains :</p>
            <ul>{orderIngredients}</ul>

        </Auxiliary>
    );
}

export default orderSummary;