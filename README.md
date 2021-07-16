The server architecture is made up of separate modules following good practices and Node standards.
The directory structure groups routes, models, controllers, and settings, into different folders.
A main app.js that connect to database and lift server is the entry point of the application

The server uses PostgreSQL as database, Sequelize as a ORM, and Express as the backend web application framework.

### RESOURCES TO CREATE DATABASE

In the Resources folder there are two sql scripts in the order of mount database example.
The hardcoded database params are in /core/config. Feel free to change if you want

### ENDPOINTS

Lift server: ```npm start```
- /api/getproducts/:name?page=&size=

This endpoint retrives all products in function of the pages (page) and the number of elements by page (size). It also filter results if specify the name param

- /api/add

Add new product if the user is authenticated 

### TEST

Run ```npm test``` after mount database to check the basic tests implemented

