-- Creates database mentoree.
-- WARNING! THIS IS AN ON-GOING FILE, DO NOT RUN
CREATE DATABASE IF NOT EXISTS mentoree;
USE mentoree;
CREATE USER IF NOT EXISTS 'mentoree_dev'@'localhost';
SET PASSWORD FOR 'mentoree_dev'@'localhost' = 'fikeca';
GRANT ALL PRIVILEGES ON mentoree.* TO 'mentoree_dev'@'localhost';
GRANT SELECT ON performance_schema.* TO 'mentoree_dev'@'localhost';
