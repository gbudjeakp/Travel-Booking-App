const getFlightObj = (flights) => {
  console.log(flights);
  const flightsTotal = flights.reduce((total, item) => {
    return (
      total +
      item.departure.price +
      item.departure.taxes +
      // item.arrival.price +
      item.arrival.taxes
    );
  }, 0);

  return {
    departureDate: flights.length === 0 ? "" : flights[0].departure.date,
    returnDate: flights.length === 0 ? "" : flights[0].arrival.date,
    departureLocation:
      flights.length === 0 ? "" : flights[0].departure.departurePlace,
    destinationLocation:
      flights.length === 0 ? "" : flights[0].departure.arrivalPlace,
    carrierDeparture: flights.length === 0 ? "" : flights[0].departure.id,
    carrierArrival: flights.length === 0 ? "" : flights[0].arrival.id,
    price: flightsTotal,
    departureObj: flights.length === 0 ? "" : flights[0].departure,
    arrivalObj: flights.length === 0 ? "" : flights[0].arrival,
  };
};

const getHotelObj = (hotels) => {
  const hotelTotal = hotels.reduce((total, item) => {
    return total + item.price + item.taxes;
  }, 0);
  return {
    name: hotels.length === 0 ? "" : hotels[0].place,
    numberOfOccupants: hotels.length === 0 ? "" : hotels[0].numberOfGuests,
    checkInDate: hotels.length === 0 ? "" : hotels[0].arrival,
    checkOutDate: hotels.length === 0 ? "" : hotels[0].departure,
    rating: hotels.length === 0 ? "" : hotels[0].rating,
    location: hotels.length === 0 ? "" : hotels[0].city,
    price: hotels.length === 0 ? "" : hotelTotal,
  };
};

const getCarObject = (rentalCar) => {
  const carTotal = rentalCar.reduce((total, item) => {
    return total + item.price + item.taxes;
  }, 0);
  console.log(rentalCar);
  return {
    name: rentalCar.length === 0 ? "" : rentalCar[0].placeOfRental,
    returnRentalDate: rentalCar.length === 0 ? "" : rentalCar[0].arrival,
    rentOutDate: rentalCar.length === 0 ? "" : rentalCar[0].departure,
    total: carTotal,
    rating: rentalCar.length === 0 ? "" : rentalCar[0].rating,
  };
};

module.exports = { getFlightObj, getHotelObj, getCarObject };
