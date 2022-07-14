# BodyMassIndex-API

This rest-api app provides/stores the details of bmi of a person based on their height and weight.

## Technical details
- [NodeJs] - Used  node js as the primary language
- [Express] - frameowork for the best usecases in api
- [ExpressCluster] - to improve the performance of api
- [mysql] - as the database.
- [mocha] - for unit testing

## Installation
1. Download/pull the git repo first

```sh
    **npm i** - To Install packages
    **npm run dev** - To start server.
```


## API - Server Check
Method : GET
```sh
localhost:3000
```
### Sample Response:
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

### Sample Response:
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

## API - Get count of Overweight Persons
Method: Get
```sh
localhost:3000/menu/overweightcount
```
### Sample Response:
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
### Sample Request Body:
```sh
[
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96
    }
]
```

### Sample Response:
```sh
{
    "status": "success",
    "response": "Data Inserted Successfully"
}
```

## Database Details
As the configs are set for local please keep the database config as follows are change the same in [sys/mysql.js] file.
```sh
host: 'localhost',
port: 3306,
user: 'root',
password: '12345678',
database: 'test'
table-name: bmi
```

Sample schema and data will be available in the code repo with file name : [db_file.sql]


## Running unit Tests
NOTE: The server should be in running test to perform the unit testings.

Please run the below command on a new terminal window
```sh
mocha
```

   [NodeJs]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [ExpressCluster]: <https://www.npmjs.com/package/express-cluster>
   [mysql]: <https://www.mysql.com/>
   [mocha]: <https://mochajs.org/>
   [db_file.sql]: <https://github.com/NagendraKommireddi/BMICode14-07-2022-KumarNagendraKommireddi/blob/main/db_file.sql>
   [sys/mysql.js]: <https://github.com/NagendraKommireddi/BMICode14-07-2022-KumarNagendraKommireddi/blob/main/sys/mysql.js>