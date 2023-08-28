### Simply Pizza Application (School midterm Project)

The Simply Pizza application is a web-based system that allows customers to create accounts, order pizza, and receive estimated pick-up times via Twilio text messages. Employees can log in to view customer orders and update estimated pick-up times. The application is built using Express, Node.js, PostgreSQL, Twilio, and other technologies.


### Features

Customer Interface: Customers can create accounts, place pizza orders, and receive estimated pick-up times.
Employee Interface: Employees can log in, view customer orders, and update estimated pick-up times.
Twilio Integration: Twilio is used to send estimated pick-up time notifications to customers via text messages.
Restaurant Notification: The restaurant is notified via SMS when a customer places an order. Twilio is used to send the text message, which includes order details.


### Final Product
!["screenshot of the banner."](/docs/banner.png)
!["screenshot of the Employee Page."](/docs/Employee_page.png)
!["screenshot of the Menu Tab."](/docs/Menu_tab.png)
!["screenshot of the Order screen."](/docs/Order_screen.png)
!["screenshot of the User page."](/docs/User_page.png)
!["screenshot of the Welcome."](/docs/Welcome.png)


### Getting Started

To start using the Simply Pizza application, follow these steps:

- Clone the repository
- Navigate to the project directory
- Install the dependencies using the `npm install` command

**Database Setup**
Run the provided schema SQL file to create the necessary tables in your PostgreSQL database and seed the table

**Set up environment variables**
Create a .env file in the root directory and add the following variables:

DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=Your_db_name
DB_PORT=5432
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TEXTPHONE=your_twilio_phone_number

**Start the web server**
Start the web server using the `npm run local` command
Go to <http://localhost:8080/> in your browser.


### Usage

Customer Interface: Visit the customer interface to create an account, order pizza, and receive estimated pick-up times.
Employee Interface: Log in to the employee interface to view customer orders and update estimated pick-up times.


### Dependencies

- Express
- Node.js
- PostgreSQL
- pg (PostgreSQL client)
- Twilio
- Morgan
- Nodemon (Automatic server restart)
- Sass
- Dotenv (Environment variables)
