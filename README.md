# BodyMassIndex-API

This rest-api app provides/stores the details of bmi of a person based on their height and weight.

## Technical details
- [NodeJs] - Used  node js as the primary language
- [Express] - frameowork for the best usecases in api
- [mysql] - as the database.
- [mocha] - for unit testing

## Installation
1. Download/pull the git repo first

```sh
    run npm i.
    run npm run dev to start server.
```


## API - Server Check
Method : GET
```sh
localhost:3000
```
# Sample Response:
```sh
{
    "message": "Server Working!"
}
```
## API - Get All BMI Details
Method : Get 
```sh
localhost:3000/menu/
```

# Sample Response:
```sh
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
```

## API - Get All Bmi Details
Method: Get
```sh
localhost:3000/menu/overweightcount
```
# Sample Response:
```sh
{
    "status": "success",
    "response": [
        {
            "count": 1
        }
    ]
}
```

## API - Insert/Calculate Bmi Details
Method: Post
```sh
localhost:3000/menu/add
```
# Sample Request Body:
```sh
[
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96
    }
]
```

# Sample Response:
```sh
{
    "status": "success",
    "response": "Data Inserted Successfully"
}
```

## Database Details
```sh
host: 'localhost',
port: 3306,
user: 'root',
password: '12345678',
database: 'test'
table-name: bmi
```
The table schema more or like as below
```sh

```
Sample schema and data will be available in the code repo with file name : [db_file.sql] (https://github.com/NagendraKommireddi/BMICode14-07-2022-KumarNagendraKommireddi/blob/main/db_file.sql)


## Running unit Tests
NOTE: The server should be in running test to perform the unit testings.

Please run the below command on a new terminal window
```sh
mocha
```

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [mysql]: <https://www.mysql.com/>
   [mocha]: <https://mochajs.org/>