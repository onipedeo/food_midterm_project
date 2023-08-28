# Simply Pizza App

The Simply Pizza App is a full stack web application built with Node.js and Express. It allows customers to place food orders for pickup and provides an interface for employees to manage orders and notify customers about the estimated pickup time.

## Features

- *Customer Interface:* Customers can browse the menu, add items to their cart, and place orders for pickup.

- *Employee Interface:* Employees can log in to manage orders, specify estimated pickup times, and send notifications to customers.

- *Order Management:* Employees can easily view and update the status of orders, helping to ensure a smooth pickup process.

- *Notification System:* The app integrates with Twilio to send text messages to customers, notifying them about their estimated order pickup time.

## Dependencies

The Simply Pizza App utilizes the following dependencies:

- *Express:* A web application framework for Node.js, used to handle routing and server-side logic.

- *dotenv:* Loads environment variables from a `.env` file, enhancing security and configurability.

- *morgan:* A logging middleware for Express, useful for tracking HTTP requests and debugging.

- *nodemon:* Monitors changes in your source code and automatically restarts the server during development.

- *pg:* A PostgreSQL client for Node.js, used to interact with the database.

- *sass:* A CSS preprocessor that simplifies and enhances the styling process.

- *twilio:* Integrates with Twilio's API to send SMS notifications to customers.

- *html:* For structuring the front-end user interface.

## Installation

1. Clone the repository:
2. Install the required dependencies using npm
3. Create a `.env` file in the root directory and add your Twilio API credentials

##Usage
1. Start the server using nodemon
2. The server will be served at `http://localhost:8080`
2. Access the customer interface by logging in as kira
3. Access the employee interface by logging in as alice.
