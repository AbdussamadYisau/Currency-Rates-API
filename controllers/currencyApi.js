const fetch = require("node-fetch");


exports.getCurrency = async (req, res, next) => {
    let {base, currency} = req.query;

    try {
        // The exchange api accepts only uppercase wrt base and currency

        base = base.toUpperCase();
        currency = currency.toUpperCase();

        //  The Api does not also accept strings

        base = base.replace(/['"]+/g, '');
        currency = currency.replace(/['"]+/g, '');

        const url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`;
        const request = await fetch(url);

        if ((request.status === 200 || 201, request.statusText === 'OK')) {
        const response = await request.json();
        return res.status(201).json({
            "results": {
                "base": response.base,
                "date": response.date,
                "rates": response.rates
            }
        });
        } else {
            if(request.status === 404 || 400 && !base && !currency) {
                return res.json({results: "You did not include the base and currency in your request"});
            }

            if(request.status === 404 || 400 && !base) {
                return res.json({results: "You did not include the base in your request"});
            }

            if(request.status === 404 || 400 && !currency) {
                return res.json({results: "You did not include the currency in your request"});
            }

            if(request.status === 404 || 400) {
                return res.json({results: "This exchange rate does not exist"});
            }

            return res.json({results: `The error code is ${result.status}`});


        }

    } catch(error) {
        next(error);
    }
}