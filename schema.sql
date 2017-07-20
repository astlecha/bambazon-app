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

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Dark wash jeans', 'Apparel', 180, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('iPhone 7 Case', 'Tech Accessories', 15, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Copper mug', 'Dishware', 20, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Swiffer Wet Jet', 'Cleaning Products', 50, 350);