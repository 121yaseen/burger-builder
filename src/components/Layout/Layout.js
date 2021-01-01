import React, { Component } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
	state = {
		sideDrawerOpen : false
	}

	closeSideDrawer = () => {
		this.setState({sideDrawerOpen : false})
	}

	openSideDrawer = () => {
		this.setState({sideDrawerOpen : true})
	}

	render() {
		return (
			<Auxiliary>
				<Toolbar openSideDrawer={this.openSideDrawer}/>
				<SideDrawer clicked={this.closeSideDrawer} show={this.state.sideDrawerOpen}/>
				<main className={classes.Content}>{this.props.children}</main>
			</Auxiliary>
		);
	}
}
export default Layout;
