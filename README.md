## Live Demo

[ABC Airlines](http://192.241.151.96:4006/#/)

## Tech

### Front End

- [React](https://reactjs.org/) - JavaScript UI Library
- [Material-UI](https://material-ui.com/) - React UI Library


### Back End

- [Express](https://expressjs.com/) - Web Framework for Node.js
- [PostgreSql](https://www.postgresql.org/) - Relational Database




## Setup Front-End

This repository is essentially a bootstrapped [Create React App](https://github.com/facebookincubator/create-react-app) project with some slight modifications. Head over to their Github page for more documentation. To get started you will want to:


1. Download all the dependencies by excuting ``` npm install``` from within the root directory
1. Start up the application by executing ```npm start``` from within the root directory
1. Your application should be accessible in your browser via ```http://localhost:3000```


## Setup Back-End


Note: you do need to connect to the [PostgreSql](https://www.postgresql.org/) database login or sign up.

1. Create a ```.env``` file in the root directory
1. Create a variable ```CONNECTING_STRING = your connecting string/URI``` make sure to add ```?ssl=true``` to the end of your URI. it would look like this ```CONNECTING_STRING = MyURI?ssl=true```
1. create a airlines_user table on your database and rows are:
1. user_id primary key
1. email
1. password
1. first_name
1. last_name
1. question1 
1. question2 
1. question3
1. answer1
1. answer2
1. answer3
1. imagge

when you done with all that you need to start your back-end server by executing ```nodemon``` from within the root directory
that's all you need have fun




