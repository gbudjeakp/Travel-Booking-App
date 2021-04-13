/** @format */

import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation, useHistory } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Grid,
  Modal,
  Divider,
  List,
  Drawer,
  CssBaseline,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import ExploreIcon from "@material-ui/icons/Explore";
import FlightIcon from "@material-ui/icons/Flight";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import useStyles from "../styles/Header";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Cart from "./Cart/Cart";
import { useDispatchContext, useStateContext } from "../context";

const mainMenu = [
  { name: "Explore", link: "/explore", icon: <ExploreIcon /> },
  { name: "Flights", link: "/flights", icon: <FlightIcon /> },
  { name: "Hotels", link: "/hotel", icon: <LocationCityIcon /> },
  { name: "Cars", link: "/cars", icon: <DriveEtaIcon /> },
];
const profileMenu = [
  {
    name: "Favorites",
    link: "/profile/favoritedestinations",
    icon: <FavoriteIcon />,
  },
  {
    name: "Notifications",
    link: "/profile/notifications",
    icon: <NotificationsIcon />,
  },
  {
    name: "Settings",
    link: "/profile/accountsettings",
    icon: <SettingsIcon />,
  },
  { name: "My Trips", link: "/profile/trips", icon: <CardTravelIcon /> },
];

function Header() {
  const classes = useStyles();

  const dispatch = useDispatchContext();
  const { authenticated, loginRequest, user } = useStateContext();
  const location = useLocation();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [modal, setModal] = useState(false); //opens signin page
  const [signup, setSignup] = useState(false); // switches to signup page
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const openModal = () => setModal(true);
  const closeModal = () => {
    dispatch({ type: "LOGIN_REQUEST" });
    setModal(false);
    setSignup(false);
  };
  const handleSignup = () => setSignup(true);
  const handleSignin = () => setSignup(false);
  const handleLogout = async () => {
    handleClose();
    closeModal();
    await fetch(`api/users/logout`);
    dispatch({ type: "LOG_OUT" });
    history.push("/explore");
  };
  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  const WrappedSignin = React.forwardRef((props, ref) => (
    <Signin {...props} forwardedRef={ref} />
  ));
  const WrappedSignup = React.forwardRef((props, ref) => (
    <Signup {...props} forwardedRef={ref} />
  ));

  useEffect(() => {}, [user?.pictureUrl]);

  return location.pathname !== "/" ? (
    <Grid container className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, {
              [classes.hide]: openDrawer,
            })}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.title}>
            Travel Booking
          </Link>
          <Grid className={classes.pages}>
            <NavLink className={classes.navlinks} to="/explore">
              Explore
            </NavLink>
            <NavLink className={classes.navlinks} to="/flights">
              Flights
            </NavLink>
            <NavLink className={classes.navlinks} to="/hotel">
              Hotels
            </NavLink>
            <NavLink className={classes.navlinks} to="/cars">
              Cars
            </NavLink>
          </Grid>
          {authenticated ? (
            <Grid>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                disabled={mobileView}
                color="inherit"
              >
                <Avatar className={classes.avatar} src={user.pictureUrl} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.profileMenu}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    style={{ textDecoration: "none", color: "#000000" }}
                    to="/profile/favoritedestinations"
                  >
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Grid>
          ) : (
            <div>
              <Button onClick={openModal} className={classes.loginbtn}>
                Login
              </Button>
              <Modal
                aria-labelledby="modal-title"
                className={classes.modal}
                open={modal || loginRequest}
                onClose={closeModal}
              >
                {signup ? (
                  <WrappedSignup close={closeModal} signin={handleSignin} />
                ) : (
                  <WrappedSignin close={closeModal} signup={handleSignup} />
                )}
              </Modal>
            </div>
          )}
          <Cart />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          }),
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {mainMenu.map((item) => (
            <NavLink
              key={item.name}
              className={classes.navlinks}
              to={item.link}
            >
              <ListItem button>
                <ListItemIcon classes={{ root: classes.listIcon }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </NavLink>
          ))}
        </List>
        {authenticated && (
          <>
            <Divider />
            <List>
              {profileMenu.map((item) => (
                <NavLink
                  key={item.name}
                  className={classes.navlinks}
                  to={item.link}
                >
                  <ListItem button key={item.name}>
                    <ListItemIcon classes={{ root: classes.listIcon }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItem>
                </NavLink>
              ))}
              <ListItem button onClick={handleLogout}>
                <ListItemIcon classes={{ root: classes.listIcon }}>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </>
        )}
      </Drawer>
      <Toolbar />
    </Grid>
  ) : (
    <></>
  );
}

export default Header;
