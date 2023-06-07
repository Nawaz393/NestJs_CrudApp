# Simple CRUD App with NestJS and PostgreSQL

This repository contains a simple CRUD (Create, Read, Update, Delete) application built with NestJS and PostgreSQL. The app provides basic functionality to manage entities and demonstrates the implementation of various features, including JWT authentication, Passport integration, and Argon2 hashing for secure password storage.

## Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14 or above)
- PostgreSQL (v12 or above)

## Getting Started

1. **Clone the repository:**

   `git clone https://github.com/Nawaz393/NestJs_CrudApp.git`

`cd your-repo`
`npm install`

## Set up the PostgreSQL database:

### Create a new PostgreSQL database.

## Configure environment variables:

Create a new .env file based on the .env.example file.
Update the values in the .env file with your specific configurations.
Run database migrations:

`npm run migrate:run`
`npm run start:dev`

The application will be running at http://localhost:3333. You can access the API endpoints using tools like Postman or curl

## Features

1. CRUD Operations: Perform Create, Read, Update, and Delete operations on entities.
2. JWT Authentication: Protect routes with JWT (JSON Web Tokens) authentication.
3. Passport Integration: Implement Passport for various authentication strategies (e.g., local, JWT).
4. Argon2 Hashing: Securely hash and verify passwords using the Argon2 algorithm.

# Author

** M Nawaz Khan **
