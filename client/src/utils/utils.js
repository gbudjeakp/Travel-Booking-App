export const getCartFlightsTotal = (cart) => {
  return cart.flights.reduce((total, item) => {
    return (
      total +
      item.departure.price +
      item.departure.taxes +
      // item.arrival.price +
      item.arrival.taxes
    );
  }, 0);
};

export const getCartHotelTotal = (cart) => {
  return cart.hotels.reduce((total, item) => {
    return total + item.price + item.taxes;
  }, 0);
};

export const getCartCarTotal = (cart) => {
  return cart.rentalCar.reduce((total, item) => {
    return total + item.price + item.taxes;
  }, 0);
};

export const getCartLength = (cart) => {
  let length = 0;
  if (cart?.flights.length > 0) length += 1;
  if (cart?.hotels.length > 0) length += 1;
  if (cart?.rentalCar.length > 0) length += 1;
  return length;
};
