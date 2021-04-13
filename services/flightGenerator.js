/** @format */
const fns = require("date-fns");
// random generators
const randomMinMax = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};
const randomInt = (num) => {
	return Math.floor(Math.random() * num);
};
// list of layovers
const layovers = [
	"Queens (JFK)",
	"San Francisco (SFO)",
	"Istanbul (IST)",
	"Toronto (YYZ)",
];

/* make the flight time between 2 hr 25 min to 2 hr 40 min */
// times for direct flights
const directTime = () => {
	const randomTime = randomMinMax(100000000, 154000000);
	const departTime = new Date(randomTime);
	const arrivalTime = fns.add(departTime, {
		hours: 2,
		minutes: randomMinMax(25, 41),
	});
	const totalDuration = fns.intervalToDuration({
		start: departTime,
		end: arrivalTime,
	});
	return {
		DepartureTime: fns.format(departTime, "p"),
		ArrivalTime: fns.format(arrivalTime, "p"),
		Duration: `2 hr ${totalDuration.minutes} min`,
	};
};

// times for indirect flights
const indirectTime = () => {
	const randomTime = randomMinMax(100000000, 154000000);
	const departTime = new Date(randomTime);
	const stopArrivalTime = fns.add(departTime, {
		hours: randomMinMax(1, 3),
		minutes: randomMinMax(15, 38),
	});
	const travelTimeFromDeparture = fns.intervalToDuration({
		start: departTime,
		end: stopArrivalTime,
	});
	const layoverDuration = {
		hours: randomMinMax(0, 3),
		minutes: randomMinMax(40, 60),
	};
	const departureTimeFromStop = fns.add(stopArrivalTime, {
		hours: layoverDuration.hours,
		minutes: layoverDuration.minutes,
	});
	const destinationArrivalTime = fns.add(stopArrivalTime, {
		hours: randomMinMax(layoverDuration.hours + 1, layoverDuration.hours + 3),
		minutes: randomMinMax(35, 60),
	});
	const travelTimeFromStop = fns.intervalToDuration({
		start: departureTimeFromStop,
		end: destinationArrivalTime,
	});
	const totalDuration = fns.intervalToDuration({
		start: departTime,
		end: destinationArrivalTime,
	});
	return {
		DepartureTime: fns.format(departTime, "p"),
		ArrivalTime: fns.format(destinationArrivalTime, "p"),
		Duration: `${totalDuration.hours} hr ${totalDuration.minutes} min`,
		TravelTimeToStop: `${travelTimeFromDeparture.hours} hr ${travelTimeFromDeparture.minutes} min`,
		Stops: [
			{
				City: layovers[randomInt(layovers.length)],
				Duration: `${layoverDuration.hours} hr ${layoverDuration.minutes} min`,
				ArrivalTime: fns.format(stopArrivalTime, "p"),
				DepartureTime: fns.format(departureTimeFromStop, "p"),
				TravelTimeFromStop: `${travelTimeFromStop.hours} hr ${travelTimeFromStop.minutes} min`,
			},
		],
	};
};

const mockData = ({ from, to, departure, returning }) => {
	const carrierIds = [29, 173, 870, 450];
	const randomCarrier = (num = carrierIds.length) => carrierIds[randomInt(num)];
	const quotes = [1, 2, 3, 4, 5, 6, 7, 8].map((id) => {
		return id % 2 === 0
			? {
					QuoteId: id,
					MinPrice: returning ? randomMinMax(225, 255) : randomMinMax(110, 145),
					Direct: false,
					OutboundLeg: {
						CarrierId: randomCarrier(),
						DepartureDate: departure,
						...indirectTime(),
					},
					...(returning && {
						InboundLeg: {
							CarrierId: randomCarrier(),
							ReturnDate: returning,
							...indirectTime(),
						},
					}),
			  }
			: {
					QuoteId: id,
					MinPrice: returning ? randomMinMax(255, 285) : randomMinMax(145, 210),
					Direct: true,
					OutboundLeg: {
						CarrierId: randomCarrier(),
						DepartureDate: departure,
						...directTime(),
					},
					...(returning && {
						InboundLeg: {
							CarrierId: randomCarrier(),
							ReturnDate: returning,
							...directTime(),
						},
					}),
			  };
	});
	return {
		From: from,
		To: to,
		Quotes: quotes
			.sort((x, y) => x.MinPrice - y.MinPrice)
			.slice(randomInt(quotes.length)),
	};
};

module.exports = mockData;
