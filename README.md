# Social media login project

## Description
This project is a backend service built with Node.js, Express, and Prisma ORM. It provides authentication (Login) for a social media application.

## Prerequisites
- Node.js 
- npm
- PostgreSQL database

## Installation

1. Clone the repository:
    ```sh
    git@github.com:abdelbassetbenatmani/social-media.git
    cd social-media
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```properties
    DATABASE_URL="postgres://default:MOjfcTnbSY05@ep-odd-hat-a4kr1g5s.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"

    PORT=4000
    ```

4. Run database migrations:
    ```sh
    npx prisma migrate dev
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```

2. The server will be running at `http://localhost:4000`.

## Project Structure

- `src/`: Contains the source code for the application.
  - `services/`: Contains service files for different functionalities.
  - `routes/`: Contains route definitions.
  - `models/`: Contains database models in (schema.prisma).
  - in real project we add controllers and middleware folders

## API Endpoints

### Authentication
- `POST /api/v1/auth/register`: Register a new user.
- `POST /api/v1/auth/login`: Login a user.

## Error Handling
Custom error handling is implemented using the `ApiError` class.

## Database
Prisma ORM is used for database interactions. The database connection is configured using the `DATABASE_URL` environment variable.
