import React, { useState, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Favorite from "@material-ui/icons/Favorite";
import { CustomSmallerCheckBox } from "../../themes/theme";
import Tooltip from "@material-ui/core/Tooltip";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import Zoom from "@material-ui/core/Zoom";
import { Box } from "@material-ui/core";

import { useSnackbar } from "notistack";
import useStyles from "../../styles/Explore";
import PageLoading from "../AuthWrapper";

import { useStateContext, useDispatchContext } from "../../context";
import { getUpdatedList } from "./utils";
import { Link, useHistory } from "react-router-dom";
import Scroll from "../../components/Scroll";

function FavoriteCheckBox({
  place,
  userId,
  handleFavoriteChange,
  openSnack,
  dispatch,
}) {
  const classes = useStyles();
  const [checked, setChecked] = useState(place.favorite);

  useEffect(() => {
    if (place.favorite === true) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [place.favorite]);
  return (
    <>
      <CustomSmallerCheckBox
        checked={checked}
        onChange={(e) => {
          if (userId) {
            setChecked(e.target.checked);
            handleFavoriteChange(e.target.checked, place.name);
          } else {
            dispatch({ type: "LOGIN_REQUEST" });
            openSnack();
          }
        }}
        icon={<Favorite className={classes.favoriteDefaultIcon} />}
        checkedIcon={
          <Zoom in={checked}>
            <Favorite className={classes.favoriteCheckedIcon} />
          </Zoom>
        }
        classes={{ root: classes.customCheckBoxRoot }}
      />
    </>
  );
}

const Explore = () => {
  const { user, loading } = useStateContext();
  const history = useHistory();
  const userId = user?._id;
  const classes = useStyles();
  const [favorites, setFavorites] = useState([]);
  const [places, setPlaces] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatchContext();
  const [loadingScreen, setLoading] = useState(false);

  const handleShuffleButton = async () => {
    const returnedArray = await getUpdatedList(places, favorites);
    setPlaces(returnedArray);
  };

  const renderProfileFavPage = (cityList, favList) => {
    const filteredFavList = cityList.filter((city) =>
      favList.includes(city.name),
    );
    setPlaces(filteredFavList);
  };

  const openSnack = () => {
    enqueueSnackbar(
      "Please sign in or signup to create your favorite city list",
      {
        variant: "info",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        autoHideDuration: 3000,
      },
    );
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    async function getData() {
      try {
        if (loading) {
          return;
        } else {
          let favoriteList = [];
          if (userId) {
            favoriteList = await (
              await fetch(`/api/users/${userId}/favorite-cities`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              })
            ).json();
            setFavorites(favoriteList);
          }
          const cityListResponse = await fetch("/api/cities", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const cityList = await cityListResponse.json();
          cityList.map((city) => {
            city.favorite = favoriteList.indexOf(city.name) >= 0;
            return city;
          });

          const pathName = window.location.pathname;
          if (pathName === "/profile/favoritedestinations") {
            renderProfileFavPage(cityList, favoriteList);
          } else {
            const updatedList = getUpdatedList(cityList, favoriteList);
            setPlaces(updatedList);
          }
        }
      } catch (error) {
        throw error;
      }
    }
    getData();
  }, [loading, user, userId]);

  function handleFavoriteChange(checked, name) {
    const userFavoritePlaces = [...favorites];
    if (checked) {
      userFavoritePlaces.push(name);
    } else {
      const placeIndex = userFavoritePlaces.indexOf(name);
      if (placeIndex >= 0) {
        userFavoritePlaces.splice(placeIndex, 1);
      }
    }
    setFavorites(userFavoritePlaces);
    fetch(`/api/users/${userId}/favorite-cities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cities: userFavoritePlaces }),
    });
  }

  const handleToSearchPage = (city) => {
    history.push("/flights", { title: city });
  };

  const pathName = window.location.pathname;
  const smSpacing = pathName === "/profile/favoritedestinations" ? 6 : 3;
  const mdSpacing = pathName === "/profile/favoritedestinations" ? 4 : 3;

  if (loadingScreen) {
    return <PageLoading />;
  }

  return (
    <div>
      <Scroll />
      <Container className={classes.pageContainer}>
        {pathName === "/profile/favoritedestinations" ? (
          <Grid container justify="space-between">
            <Typography
              variant="h4"
              style={{ fontWeight: 600 }}
              className={classes.title}
            >
              Favorite Destinations
            </Typography>
            <Button variant="outlined">
              <Link className={classes.exploreLink} to="/explore">
                Explore
              </Link>
            </Button>
          </Grid>
        ) : (
          <>
            <Typography variant="h4" className={classes.title}>
              Explore destinations
            </Typography>
            <Typography
              variant="subtitle2"
              className={(classes.title, classes.subtitle2)}
            >
              World's top destinations to explore
            </Typography>

            <Button
              style={{ backgroundColor: "#fff" }}
              className={classes.shuffle}
              onClick={handleShuffleButton}
            >
              <Tooltip title="Shuffle Cities">
                <ShuffleIcon />
              </Tooltip>
            </Button>
          </>
        )}
        <Grid
          container
          spacing={3}
          justify="center"
          className={classes.gridContainer}
        >
          {places.map((place) => (
            <Grid
              item
              key={place.name}
              xs={12}
              sm={smSpacing}
              md={mdSpacing}
              style={{ cursor: "pointer" }}
            >
              <Box
                className={classes.paperContainer}
                onClick={() => handleToSearchPage(place.name)}
                style={{
                  backgroundImage: `linear-gradient(to bottom, transparent, rgba(52, 52, 52, 0.63)), url(${place.imageUrl})`,
                }}
              >
                <Box
                  component="span"
                  className={classes.bottomInformationContainer}
                >
                  <Box
                    component="span"
                    className={classes.bottomInformationSubContainer1}
                  >
                    <Box component="span" className={classes.legend1}>
                      {place.name},
                    </Box>
                    <Box component="span" className={classes.legend2}>
                      {place.country}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.bottomInformationSubContainer2}>
                <FavoriteCheckBox
                  place={place}
                  userId={userId}
                  handleFavoriteChange={handleFavoriteChange}
                  openSnack={openSnack}
                  dispatch={dispatch}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Explore;
