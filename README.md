The server architecture is made up of separate modules following good practices and Node standards.
The directory structure groups routes, models, controllers, and settings, into different folders.
A main app.js that connect to database and lift server is the entry point of the application.

The server uses PostgreSQL as database, Sequelize as a ORM, and Express as the backend web application framework.

The entity-relationship model is found into models folder or/and in ddl.sql (resources folder).

### RESOURCES TO CREATE DATABASE

In the Resources folder there are two sql scripts in the order of mount database example.
The hardcoded database params are in /core/config. Feel free to change if you want according to your development.

### ENDPOINTS

Lift server: `npm start`

- /api/getproducts/:name?page=&size=

This endpoint paginate products in function of the pages (page) and the number of elements by page (size). It also filter results if specify the name param.
It specifies also total pages, the next and previous pages from paginate and the number of items of each page.

- /api/add

Add new product if the request has correct auth header (Bearer admintoken). Server calculates the net price according to specified taxes.

### TEST

Run `npm test` after mount database to check some basic tests implemented.
