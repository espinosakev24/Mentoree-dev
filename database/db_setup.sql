-- Creates database mentoree_db and user mentoree_dev.
CREATE DATABASE IF NOT EXISTS mentoree_db;
USE mentoree_db;
CREATE USER IF NOT EXISTS 'mentoree_dev'@'localhost';
SET PASSWORD FOR 'mentoree_dev'@'localhost' = 'fikeca';
GRANT ALL PRIVILEGES ON mentoree_db.* TO 'mentoree_dev'@'localhost';