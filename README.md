# GreenEats

An application for conscientious eaters who prefer a vegan or vegetarian diet.

The application allows users to:

- Find green and cruelty-free dishes from the world over.
- Share their own recipes.
- Connect with fellow vegan and vegetarian eaters.

The uploaded images are stored via the [AWS S3](https://aws.amazon.com/s3/) service.

## Demo

The demo can be accessed at https://greeneats-demo.netlify.app/.

## Scripts

Create a SQLite database and populate it with sample data.

    node initdb.js

Run the app in development mode:

    npm run dev

Build the app for production:

    npm run build

Run the app in production mode:

    npm start
