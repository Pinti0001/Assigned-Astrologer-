# Astrology App

This is a Node.js application for managing users and astrologers in an astrology service platform. Users can create accounts, and astrologers can be added and assigned to users.

## Prerequisites

- Node.js installed on your local machine
- MongoDB Atlas account for database storage

## Getting Started

1. Clone the repository: ` git clone https://github.com/Pinti0001/Assigned-Astrologer-.git `


2. Install dependencies: ` npm install express mongoose nodemon `

3. Run Project : ` npm run start `
  

4. Set up MongoDB Atlas:

   - Create a new cluster and database in MongoDB Atlas.
   - Obtain the connection string for your cluster.
   - Replace the connection string in `app.js` with your own connection string.

## Usage

### 1. User Management

- Users can be created using the `/user/create` endpoint.
- Each user must provide their name, email, gender, date of birth, and password.
- User creation is handled by the `createUser` function in `userController.js`.
- The user model is defined in `userModel.mjs`.

### 2. Astrologer Management

- Astrologers can be added using the `/astrologer/add` endpoint.
- Each astrologer must provide their name, email, expertise, and hourly rate.
- Astrologer creation is handled by the `addAstrologer` function in `astrologerController.js`.
- Astrologers can be assigned to users using the `/astrologer/assign` endpoint.
- Astrologer assignment is handled by the `assignUser` function in `astrologerController.js`.
- The astrologer model is defined in `astrologerModel.mjs`.

## Endpoints

### User Endpoints

- POST `/user/create`: Create a new user.
  - Request Body: `{ "name": "John Doe", "email": "john@example.com", "gender": "male", "dob": "1990-01-01", "password": "password123" }`

### Astrologer Endpoints

- POST `/astrologer/add`: Add a new astrologer.
  - Request Body: `{ "name": "Jane Smith", "email": "jane@example.com", "expertise": "Love and Relationships", "hourlyRate": 50 }`
- POST `/astrologer/assign`: Assign an astrologer to a user.
  - Request Body: `{ "userId": "<user-id>" }`

## Controllers

- `userController.js`: Contains functions for user management.
- `astrologerController.js`: Contains functions for astrologer management, such as adding astrologers and assigning them to users.

## Models

- `userModel.mjs`: Defines the schema for users, including fields such as name, email, gender, and assigned astrologer.
- `astrologerModel.mjs`: Defines the schema for astrologers, including fields such as name, email, expertise, and hourly rate.

