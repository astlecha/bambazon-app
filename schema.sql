DROP DATABASE IF EXISTS bambazon;
CREATE DATABASE bambazon;

USE bambazon;

CREATE TABLE products (
	item_id INTEGER(30) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NULL,
	price INT NOT NULL,
	stock_quantity INTEGER(10) NOT NULL,
	PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Silk scarf', 'Apparel', 250, 25);