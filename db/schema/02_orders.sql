DROP IF EXISTS TABLE orders CASCADE
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users,
  orders_date DATE NOT NULL,
  orders_total INT NOT NULL,
  order_complete BOOLEAN NOT NULL
);

