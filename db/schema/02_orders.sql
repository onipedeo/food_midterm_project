DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users,
  orders_date TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  orders_total INT NOT NULL,
  estimated_completion TIME Default NULL,
  order_complete BOOLEAN NOT NULL DEFAULT FALSE
);
