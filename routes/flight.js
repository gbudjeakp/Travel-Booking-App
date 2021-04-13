
const express = require("express");
const router = express.Router();
const unirest = require("unirest");
const rapidApiKey = process.env.RAPID_API_KEY;
const rapidApiHost = process.env.RAPID_API_HOST;
const test = require("../validation/flights");
const mockData = require("../services/flightGenerator");

router.get("/quotes/:from/:to/:outboundDate", (req, res, next) => {
	const { from, to, outboundDate } = req.params;
	const { inboundDate } = req.query;
	const errors = {};
	// check locations
	const origin = test.validateLocation(from, errors, "from");
	const destination = test.validateLocation(to, errors, "to");
	// check dates
	const outDate = test.validateDate(outboundDate, errors, "outboundDate");
	const inDate = inboundDate
		? test.validateDate(inboundDate, errors, "inboundDate")
		: "";
	const departDate =
		errors.outboundDate ||
		test.checkDepartDate(outDate, errors, "outboundDate");
	const returnDate =
		inDate && !errors.inboundDate
			? test.checkReturnDate(inDate, outDate, errors, "inboundDate")
			: inDate;

	if (!Object.keys(errors).length) {
		const info = {
			from: origin,
			to: destination,
			departure: departDate,
			returning: returnDate,
		};

		res.status(200).json(mockData(info));
	} else {
		res.send(errors);
	}
});

router.get("/places/:regionId", (req, res, next) => {
	const { regionId } = req.params;
	const error = {};
	const region = test.validateLocation(regionId, error, "region");
	if (!Object.keys(error).length) {
		const request = unirest(
			"GET",
			`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK\/USD/en-US/`
		);

		request.query({
			query: region,
		});

		request.headers({
			"x-rapidapi-key": rapidApiKey,
			"x-rapidapi-host": rapidApiHost,
			useQueryString: true,
		});
		request
			.then((response) => {
				res.status(200).json(response.body);
			})
			.catch((err) => {
				next(err);
			});
	} else {
		res.send(error);
	}
});

module.exports = router;