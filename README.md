## Node.js JWT Learning Documentation

Ness' Documentation on Learning Node.js (& Express) JWT Authentication from tutorial series on The Net Ninja YouTube channel.

## What I've learned:
- **JWT** = JSON web tokens is to implement authentication
- **Postman** is a tool to stimulate post routes without having a real request/respond
- **Mongoose Hooks** is a special function that will fires after a certain mongoose event happens, such created/deleted file 
- **Cookies** is used to get user data information, stored on user's browser in a specified amount of time
- **Cookies workflow**: a user visit the web, then server will send a JWT cookies to store in user' browser, through the cookie it will checked wether a user is signed/logged or not
- **Signup flow**: user submit their email and password, stored in a database with hashed password, will return error message if the email is registered / password less than 6 char
- **Login flow**: user submit email and password, bycript will compare those with email stored on the db and the hashed password, will return error if either email/password is incorrect.
- **Protecting routes**: whenever user want to go to the protected page, it will redirect user to login page, if they are logged in it'll go to the protected page. using middleware that can be reused.
<<<<<<< HEAD
- **Logout**: replacing jwt cookie with a blank cookie so that user will lose their authentication made when logged in.
- **Checking current user** logged in on every new get request from the web, get user email  then displayed on homepage
- refining rendering and finalization
=======
>>>>>>> parent of db54597 (finished lesson-15)


**Source code on each branch for each lesson learned**