import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
	{ label: "Cheese", type: "cheese" },
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Meat", type: "meat" },
];
const buildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
			{controls.map((ctrl) => {
				return (
					<BuildControl
						label={ctrl.label}
						key={ctrl.type}
						add={() => {
							props.addIngredient(ctrl.type);
                        }}
                        remove={() => {
							props.removeIngredient(ctrl.type);
						}}
						disabled={props.disabledInfo[ctrl.type]}
						
					/>

				);
			})}
		</div>
	);
};

export default buildControls;
