DROP TABLE IF EXISTS orders_dishes CASCADE;
CREATE TABLE orders_dishes (
  order_id INT REFERENCES orders(id) ON DELETE CASCADE,
  dish_id INT REFERENCES dishes(id) ON DELETE CASCADE,
  quantity INT NOT NULL DEFAULT 0
);