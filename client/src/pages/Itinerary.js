/** @format */

import React, { useState, useEffect } from "react";
import { Container, Button, Typography } from "@material-ui/core";
import TripAccordion from "../components/Itinerary/TripAccordion";
import useStyles from "../styles/Itinerary/Itinerary";
import { useStateContext } from "../context/context";
import { useHistory } from "react-router-dom";
import Scroll from "../components/Scroll";
import clsx from "clsx";

// for testing
const mockData = [
  {
    user: {},
    car: {
      name: "2016 Toyota Camry",
      total: 32,
      imageUrl:
        "https://file.kelleybluebookimages.com/kbb/base/evox/CP/10661/2016-Toyota-Camry-front_10661_032_1826x753_040_cropped.png?interpolation=high-quality&downsize=600:*",
      rentOutDate: "Sat, Apr 3",
      rentOutTime: "2:30PM", //add to schema
      returnRentalDate: "Wed, Apr 7",
      returnRentalTime: "11:30AM", //add to schema
      location: "12345 W Adams St, Jacksonville, FL 32202",
    },
    flight: {
      QuoteId: "68",
      From: "Vancouver",
      To: "Jacksonville",
      Travelers: 2,
      MinPrice: 398,
      Direct: false,
      OutboundLeg: {
        CarrierId: 450,
        DepartureDate: "2021-03-02",
        DepartureTime: "7:00AM",
        ArrivalTime: "4:35PM",
        Duration: "9 hr 35 min",
        TravelTimeToStop: "2 hr 45 min",
        Stops: [
          {
            Duration: "2 hr 18 min",
            ArrivalTime: "9:30AM",
            City: "Queens (JFK)",
            DepartureTime: "11:48AM",
            TravelTimeFromStop: "4hr 32 min",
          },
        ],
      },
      InboundLeg: {
        CarrierId: 450,
        ReturnDate: "2021-04-07",
        DepartureTime: "1:20PM",
        ArrivalTime: "7:45PM",
        Duration: "6 hr 25 min",
        TravelTimeToStop: "1 hr 45 min",
        Stops: [
          {
            Duration: "1 hr 10 min",
            ArrivalTime: "3:25PM",
            City: "Queens (JFK)",
            DepartureTime: "4:35PM",
            TravelTimeFromStop: "2hr 45 min",
          },
        ],
      },
    },
    hotel: {
      name: "Art Ovation Hotel",
      numberOfOccupants: 2,
      roomNumber: 457, //remove from schema
      phone: "+1941-316-0808", //add to schema
      url: "https://www.artovationhotel.com/", //add to schema
      rooms: 2, //add to schema ?
      nights: 2, //add to schema ?
      checkInDate: "Sat, Apr 3",
      checkOutDate: "Mon, Apr 5",
      image:
        "https://cache.marriott.com/marriottassets/marriott/SRQSA/srqsa-rooftop-7859-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*",
      rating: 4,
      location: "1255 North Palm Avenue, Sarasota, FL 34234",
      reviews: 583,
      price: 348,
    },
  },
  {
    user: {},
    car: {},
    flight: {
      QuoteId: "69",
      From: "Vancouver",
      To: "Jacksonville",
      Travelers: 2,
      MinPrice: 398,
      Direct: false,
      OutboundLeg: {
        CarrierId: 450,
        DepartureDate: "2021-03-02",
        DepartureTime: "7:00AM",
        ArrivalTime: "4:35PM",
        Duration: "9 hr 35 min",
        TravelTimeToStop: "2 hr 45 min",
        Stops: [
          {
            Duration: "2 hr 18 min",
            ArrivalTime: "9:30AM",
            City: "Queens (JFK)",
            DepartureTime: "11:48AM",
            TravelTimeFromStop: "4hr 32 min",
          },
        ],
      },
      InboundLeg: {
        CarrierId: 450,
        ReturnDate: "2021-04-07",
        DepartureTime: "1:20PM",
        ArrivalTime: "7:45PM",
        Duration: "6 hr 25 min",
        TravelTimeToStop: "1 hr 45 min",
        Stops: [
          {
            Duration: "1 hr 10 min",
            ArrivalTime: "3:25PM",
            City: "Queens (JFK)",
            DepartureTime: "4:35PM",
            TravelTimeFromStop: "2hr 45 min",
          },
        ],
      },
    },
    hotel: {
      name: "Art Ovation Hotel",
      numberOfOccupants: 2,
      roomNumber: 457, //remove from schema
      phone: "+1941-316-0808", //add to schema
      url: "https://www.artovationhotel.com/", //add to schema
      rooms: 2, //add to schema ?
      nights: 2, //add to schema ?
      checkInDate: "Sat, Apr 3",
      checkOutDate: "Mon, Apr 5",
      image:
        "https://cache.marriott.com/marriottassets/marriott/SRQSA/srqsa-rooftop-7859-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*",
      rating: 4,
      location: "1255 North Palm Avenue, Sarasota, FL 34234",
      reviews: 583,
      price: 348,
    },
  },
];

const Itinerary = () => {
  const classes = useStyles();

  const { user } = useStateContext();
  const history = useHistory();

  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [upcomingFilter, setUpcomingFilter] = useState(true);
  const [pastFilter, setPastFilter] = useState(false);

  const handleUpcomingFilter = () => {
    setUpcomingFilter(true);
    setPastFilter(false);
  };
  const handlePastFilter = () => {
    setPastFilter(true);
    setUpcomingFilter(false);
  };
  const today = new Date();
  const toDateObject = (date) => {
    return new Date(`${date}T23:59`);
  };
  const isUpcoming = (trip) => {
    const departureDate = toDateObject(trip.flight.OutboundLeg.DepartureDate);
    if (departureDate >= today) {
      return trip;
    }
  };
  const isPast = (trip) => {
    const departureDate = toDateObject(trip.flight.OutboundLeg.DepartureDate);
    if (departureDate < today) {
      return trip;
    }
  };
  const sortTrips = (trips) => {
    return trips.sort(
      (a, b) =>
        toDateObject(b.flight.OutboundLeg.DepartureDate) -
        toDateObject(a.flight.OutboundLeg.DepartureDate),
    );
  };

  const handleRedirect = () => history.replace("/flights");

  const getTrips = async () => {
    try {
      const response = await fetch(`/api/itinerary/itinerary/${user._id}`, {
        method: "GET",
      });
      const data = await response.json();

      if (data.status === "Success") {
        const newTrips = data.data.filter(
          ({ date }) => new Date(date).getTime() >= Date.now(),
        );
        const oldTrips = data.data.filter(
          ({ date }) => new Date(date).getTime() <= Date.now(),
        );
        // const pastTrips = data.filter(oldTrips);
        // const upcomingTrips = data.filter(newTrips);
        // setPast(sortTrips(oldTrips));
        setUpcoming(sortTrips(newTrips));
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getTrips();
  }, []);
  return (
    <div>
      <Scroll />
      <Container className={classes.tripHistoryContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpcomingFilter}
          className={clsx({
            [classes.inactiveBtn]: pastFilter,
            [classes.activeBtn]: upcomingFilter,
          })}
        >
          Upcoming
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePastFilter}
          className={clsx({
            [classes.inactiveBtn]: upcomingFilter,
            [classes.activeBtn]: pastFilter,
          })}
        >
          Past and Cancelled
        </Button>
        {upcomingFilter &&
          upcoming.map((trip) => <TripAccordion key={trip._id} trip={trip} />)}
        {pastFilter &&
          past.map((trip) => (
            <TripAccordion key={trip.flight.QuoteId} trip={trip} />
          ))}
        {upcomingFilter && !upcoming.length && (
          <div className={classes.noTrips}>
            <Typography variant="h4">
              You currently have no booked trips.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: classes.activeBtn }}
              onClick={handleRedirect}
            >
              Book a trip
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};
export default Itinerary;
