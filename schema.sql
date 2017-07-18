DROP DATABASE IF EXISTS bambazon;
CREATE DATABASE bambazon;

USE bambazon;

CREATE TABLE products (
	id INTEGER(30) AUTO INCREMENT NOT NULL,
	item VARCHAR(100) NULL,
	price INT NULL,
	quantity INTEGER(10) NULL,
	new_quantity INT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (item, price, quantity, new_quantity)
VALUES ('Silk scarf', 250, 25, 25);