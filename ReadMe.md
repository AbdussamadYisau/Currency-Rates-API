# Enye Test API

This API serves as a service integration to a [public API](https://api.exchangeratesapi.io/latest) and exposing a RESTful endpoint. The endpoint will accept requests and returns a modified response schema from the integrated API.

## Query Example 

```javascript

/api/rates?base=CZK&currency=EUR,GBP,USD

```

### Response Example 

```json

{
    "results": {
        "base": "CZK",
        "date": "2020-11-17",
        "rates": {
            "EUR": 0.0377244605,
            "GBP": 0.033795458,
            "USD": 0.044824204
        }
    }
}

```

#### Link to deployed API and screenshots

[Deployed here]( https://lit-lake-78126.herokuapp.com/) 

![Screenshot of Website at work](https://github.com/AbdussamadYisau/EnyeTestAPI/blob/master/assets/Screenshot.png)
