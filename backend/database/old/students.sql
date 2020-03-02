/*Create table students*/
USE mentoree_db;
CREATE TABLE IF NOT EXISTS students(
    student_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    post_id int,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    contact VARCHAR(13) NOT NULL,
    password VARCHAR(25) NOT NULL,
    location VARCHAR(25) NOT NULL,
    age INT(3) NOT NULL,
    email VARCHAR(45) NOT NULL,
    education VARCHAR(45) NOT NULL
) AUTO_INCREMENT = 1;