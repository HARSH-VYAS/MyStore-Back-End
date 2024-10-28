/* Replace with your SQL commands 

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
*/

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    product_id INTEGER references products(id),
    quantity INTEGER,
    user_id INTEGER references users(id),
    order_status VARCHAR(10)
);