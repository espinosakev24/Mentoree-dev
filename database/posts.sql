/*Create table Posts in mentoree_db*/
USE mentoree_db;
CREATE TABLE IF NOT EXISTS posts(
    post_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    teacher_id INT,
    title VARCHAR(25) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(15) NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    schedule VARCHAR(15) NOT NULL,
    price INT NOT NULL,
    size INT NOT NULL,
    location VARCHAR(25) NOT NULL
) AUTO_INCREMENT = 1;