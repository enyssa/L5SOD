CREATE DATABASE node;

USE node;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  class VARCHAR(50),
  age INT,
  gender VARCHAR(10)
);
