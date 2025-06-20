# Welcome to Flights Services

## Project Setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloiaded project
- Create a '.env' file in the root directory and add the following environment variables 
    `PORT=3000`

- Inside the `src/config` folder create a new file `config.json` and then add the following code
````
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

````

- Once you haveadded your db config as listed abpve , go to the src folder `cd src` by executing this command from your terminal and then executes
    - `npx sequelize db:create` (Now you are connected to the database)

- Now to create a model to the database you can execute

    `npx sequelize model:generate --name<modelName> --attributes name:string`
    (here considering name:string as one of the attributes of the model)
- Now to migrate the model to the database you can execute
  
   `npx sequelize db:migrate`
- If you want to revert your migration then you can execute

    `npx sequelize db:migrate:undo`

## Database Design

- Airplane Table
- Flight
- Airport
- City

### Associations
- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights, but a flight belongs to one airport