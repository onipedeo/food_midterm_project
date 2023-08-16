DROP TABLE IF EXISTS payment_details CASCADE;
CREATE TABLE payment_details (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users ON DELETE CASCADE,
  card_number BIGINT NOT NULL,
  cvv INT NOT NULL,
  exp_date DATE
);
