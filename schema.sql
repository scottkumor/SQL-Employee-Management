DROP DATABASE IF EXISTS Employee_Tracker;

CREATE DATABASE Employee_Tracker;

USE Employee_Tracker;

CREATE TABLE employees (
  id INT PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL, 
  manager_id INT NULL,
  department_id INT NOT NULL,
	FOREIGN KEY (role_id) REFERENCES roles(id),
	FOREIGN KEY (manager_id) REFERENCES employee(id),
	FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE roles (
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
	salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
	FOREIGN KEY (department_id) REFERENCES department(id)
);


CREATE TABLE departments (
    id INT PRIMARY KEY NOT NULL,
    department_name  VARCHAR(30) NOT NULL
);

