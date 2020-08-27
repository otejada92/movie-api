# Movie DB API

## About

API that makes it easy to manipulate tons of movie records.

## Built with

* [Nodejs](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [MySQL](https://www.mysql.com/)
* [Sequelize ORM](https://sequelize.org/)

## Prerequisite

```
Nodejs v14.7.0 
```
```
Typescript ^4.0.2 
```
```
MySQL
```

# Installation

### Quick setup :beers:

    1. Install docker. 
    2. Clone repository https://github.com/otejada92/movie-api
    3. Run npm install
    4. Run npm run build
    5. Done? Go to the root folder and run the following command:

        docker-compose up --build
        
    6. Run npm run movie:generator
    7. Run npm run db:init

### Common setup

    1. Install MySql.
        * After install it you can use the scripts in the Database setup section.
    2. Clone repository https://github.com/otejada92/movie-api 
    3. Go to the root folder.
    4. Run npm install.
    5. Run npm run movie:generator
    6. Run npm run db:init
    7. Run npm run dev:api

# API resources

## Movie

| Description | Method | Route |
|   :---:         |     :---:      |     :---:     |
| Retrieve all movies  | GET     | api/v1/movies/    |
| Retrieve a movie     | GET       | api/v1/movies/:id      |
| Create a movie   | POST      | api/v1/movies/    |
| Disable a movie    | PUT       |   api/v1/movies/:id    |

## Filter 

Movie filters:

    title, director, visible, writer

Example:

    api/v1/movies/?visible=false


## Pagination

* pageSize : Number of records
* page : Number of page

Example: 

    api/v1/movies/?page=5&pageSize=10


## Order
* sortBy: resource field
* orderBy: DESC or ASC

Example:

    api/v1/movies?sortBy=id&orderBy=DESC


## Review

| Description | Method | Route |
|   :---:         |     :---:      |     :---:     |
| Retrieve reviews of a movie  | GET     | api/v1/movies/:id/reviews    |
| Create a review     | POST       | api/v1/movies/:id/reviews      |


# Test

### Run all
    npm run tests

# Database setup

All this is done through sequelize if you need more information, [visit] (https://sequelize.org/), to run the following scripts update .env file.

### Create DB

    npm run db:create

# Migrations

Create tables

### Run all
    npm run db:migrate:all

Delete tables 

### Undo all
    npm run db:migrate:undo

## Seeders

Insert data to tables.

### Run all
    1. npm movie:generator
    2. npm run db:seed:all

Delete all data in the tables.

## Undo all
    npm run db:seed:undo

## Need data?

The following script will create you a json file with data that automatically seeders will take. :beers:

    Run npm movie:generator

## License
A short snippet describing the license (MIT, Apache etc)

MIT © [Osvaldo Tejada]()


