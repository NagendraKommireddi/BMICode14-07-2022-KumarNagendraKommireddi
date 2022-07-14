# BMICode14-07-2022-KumarNagendraKommireddi

This rest-api app gives/adds the details of bmi of a person based on their height and weight.

## Technical details
- [NodeJs] - Used  node js as the primary language
- [Express] - frameowork for the best usecases in api
- [mysql] - as the database.
- [moca] - for unit testing

## Installation
1. Download/pull the git repo first

```sh
    run npm i.
    run npm run dev to start server.
```

This app works as an api endpoints using #NodeJs,ExpressJs,Mysql

## API - Server Check
Method : GET
```sh
localhost:3000
```
Sample Response:
{
    "message": "Server Working!"
}

## API - Get All Bmi Details
Method : Get 
```sh
localhost:3000/menu/
```

Sample Response:
{
    "status": "success",
    "response": [
        {
            "id": 1,
            "gender": "Male",
            "height": "171.00",
            "weight": "96.00",
            "bmi": "32.8",
            "bmi_category": "Moderately Obese",
            "health_risk": "Medium risk"
        }
]
}

## API - Get All Bmi Details
Method: Get
```sh
localhost:3000/menu/overweightcount
```
Sample Response:
{
    "status": "success",
    "response": [
        {
            "count": 1
        }
    ]
}

## API - Insert/Calculate Bmi Details
Method: Post
```sh
localhost:3000/menu/add
```
Sample Request Body:
[
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96
    }
]
Sample Response:
{
    "status": "success",
    "response": "Data Inserted Successfully"
}

## Running unit Tests
NOTE: The server should be running for the unit tests to be run.
```sh
mocha
```

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [mysql]: <https://www.mysql.com/>
   [mocha]: <https://mochajs.org/>