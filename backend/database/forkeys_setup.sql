/*Sets Foreign Keys on Tables*/
USE mentoree_db
ALTER TABLE students
ADD FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE;

ALTER TABLE posts
ADD FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
ADD FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id) ON DELETE CASCADE;

ALTER TABLE teachers
ADD FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE;