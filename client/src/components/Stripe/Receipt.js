export const getReciept = (data, email) => {
  const { flights, hotels, rentalCars } = data;
  const flightImage = flights
    ? "https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1364&q=80"
    : "";

  const hotelImage = hotels
    ? "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    : "";
  const carImage = rentalCars
    ? "https://images.unsplash.com/photo-1601935774636-f9708b8331d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80"
    : "";
  const totalPrice =
    flights.totalPrice + hotels.totalPrice + rentalCars.totalPrice;

  const flightObj = {
    text:
      flights.totalPrice > 0
        ? `${flights.departure} to ${flights.arrival}`
        : "No flight selected",
    image: flightImage,
    price: flights ? `$${flights.totalPrice}` : "",
  };

  const hotelObj = {
    text: hotels.totalPrice > 0 ? hotels.details : "No hotel selected",
    image: hotelImage,
    price: hotels ? `$${hotels.totalPrice}` : "",
  };

  const carObj = {
    text:
      rentalCars.totalPrice > 0 ? rentalCars.details : "No rental car selected",
    image: carImage,
    price: rentalCars ? `$${rentalCars.totalPrice}` : "",
  };

  return {
    from: {
      email: process.env.REACT_APP_EMAIL,
    },
    personalizations: [
      {
        to: [
          {
            email: email,
          },
        ],
        dynamic_template_data: {
          total: `$${totalPrice}`,
          items: [flightObj, hotelObj, carObj],
          receipt: true,
          name: "Team AngelFish",
          address01: "1234 Fake St.",
          address02: "Apt. 123",
          city: "Place",
          state: "CO",
          zip: "80202",
        },
      },
    ],
    template_id: "d-a1cb58d55d1242158d7771c4f471f07c",
  };
};
