ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL auto_increment,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45),
  price DECIMAL(10,2) NOT NULL,
  stock_quantity DECIMAL NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Ranger", "toys", 50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pink Ranger", "toys", 50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Green Ranger", "toys", 50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue Ranger", "toys", 50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yellow Ranger", "toys", 50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Ranger", "toys", 50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nvidia Geforce 1080", "Computer Components", 800, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DDR4 5600 2x8 GB", "Computer Components", 200, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pop Heroes Spider-Man", "toys", 75, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Recurve Bow", "Weapons", 750, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Claymore of Destruction!", "Weapons", 9000, 1);