# Authentication API

Backend authentication APIs built using Node.js, Express and PostgreSQL.

## Features

- User Registration API
- User Login API
- Password hashing using bcrypt
- JWT Access Token authentication
- JWT Refresh Token support
- Protected route using middleware
- Input validation and sanitization
- PostgreSQL database integration
- Clean MVC folder structure

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize
- bcrypt
- jsonwebtoken
- dotenv

## API Endpoints

POST /api/auth/register  
POST /api/auth/login  
POST /api/auth/refresh-token  

## Protected Route

GET /api/auth/profile

Authorization Header:

Bearer ACCESS_TOKEN