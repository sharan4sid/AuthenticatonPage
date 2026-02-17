# AuthenticationPage

A full-stack authentication system with email-password login and Google OAuth integration using JWT for secure session management.

## Features

- User registration (email & password)
- Secure login with JWT
- Google OAuth login
- Protected routes
- Logout functionality
- Environment-based configuration

## Tech Stack

Frontend:
- React
- Axios

Backend:
- Node.js
- Express.js
- MongoDB
- JWT
- Passport.js (Google OAuth)

Tools:
- Git & GitHub

## Installation

Clone the repository:

git clone https://github.com/sharan4sid/AuthenticationPage.git

Navigate to project folder:

cd AuthenticationPage

Install dependencies:

cd backend
npm install

cd ../frontend
npm install

## Environment Variables

Create a .env file inside backend/ and add:

GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_secret
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongodb_connection


## Run Locally

Backend:
node server.js

Frontend:
npm start

## Folder Structure

backend/
  routes/
  models/
  middleware/
  config/

frontend/
  src/
  public/

## Future Improvements

- Add refresh token mechanism
- Implement role-based authentication
- Add password reset functionality
- Deploy to production


