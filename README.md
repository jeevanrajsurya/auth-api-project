# Authentication & Admin Dashboard API

Backend APIs built using **Node.js, Express, and PostgreSQL** for a Flight Booking System.
This project includes **User Authentication APIs and Admin Dashboard APIs** with secure JWT-based authentication.


## Features

### User Authentication

* User Registration API
* User Login API
* Password hashing using bcrypt
* JWT Access Token authentication
* JWT Refresh Token support
* Protected route using middleware
* Input validation and sanitization

### Admin Authentication

* Admin Login API
* Admin Logout API
* Role-based access control (Admin-only routes)

### Admin Dashboard APIs

* Dashboard statistics endpoint
* Recent bookings endpoint
* JWT protected admin routes

### Backend Architecture

* PostgreSQL database integration
* Sequelize ORM
* Clean MVC folder structure
* Environment variable configuration using dotenv


## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Sequelize ORM
* bcrypt
* jsonwebtoken
* dotenv
* CORS


# API Endpoints

## User Authentication APIs
### Register User
POST /api/auth/register
### Login User
POST /api/auth/login
### Refresh Access Token
POST /api/auth/refresh-token

<!-- ## Protected User Route
### Get User Profile -->
GET /api/auth/profile
Header:
Authorization: Bearer ACCESS_TOKEN


<!-- # Admin APIs -->
<!-- ### Admin Login -->
POST /api/admin/login
<!-- ### Admin Logout -->
POST /api/admin/logout
Header:
Authorization: Bearer ACCESS_TOKEN

<!-- # Admin Dashboard APIs -->
<!-- ### Dashboard Statistics -->
GET /api/admin/dashboard/stats
### Recent Bookings
GET /api/admin/dashboard/recent-bookings

# Security

* Passwords are hashed using bcrypt
* Authentication using JWT Access Tokens
* Refresh token support for session management
* Protected routes using middleware
* Role-based access control for admin routes
* Input validation and sanitization implemented

