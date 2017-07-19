DROP DATABASE IF EXISTS bambazon;
CREATE DATABASE bambazon;

USE bambazon;

CREATE TABLE products (
	id INTEGER(30) AUTO_INCREMENT NOT NULL,
	item VARCHAR(100) NOT NULL,
	price INT NOT NULL,
	quantity INTEGER(10) NULL,
	updated_quantity INT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (item, price, quantity, updated_quantity)
VALUES ('Silk scarf', 250, 25, 25);