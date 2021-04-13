/** @format */

import React, { useState } from "react";

import { useStateContext } from "../../context";

import { getCartLength } from "../../utils/utils";

import { withStyles } from "@material-ui/core/styles";
import { IconButton, Drawer, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import CartList from "./CartList";
import { useStyles } from "./styles";

const StyledBadge = withStyles(() => ({
	badge: {
		right: -3,
		top: 13,
		background: "#FFA000",
		padding: "0 4px",
	},
}))(Badge);

const Cart = () => {
	const { cart } = useStateContext();
	const [open, setOpen] = useState(false);

	const classes = useStyles();

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<>
			<IconButton onClick={handleToggle}>
				<StyledBadge badgeContent={getCartLength(cart)}>
					<ShoppingCartIcon />
				</StyledBadge>
			</IconButton>
			<Drawer
				anchor="right"
				open={open}
				onClose={handleToggle}
				classes={{ paper: classes.drawerPaper }}
			>
				<CartList closeCart={handleToggle} />
			</Drawer>
		</>
	);
};

export default Cart;
