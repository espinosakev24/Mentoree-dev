const { Router } = require('express');
const router = Router();
const pool = require('../database');

router.route('/')
  // GET request - localhost:4000/api/students/
  .get(async (req, res) => {
    const result = await pool.query('SELECT * FROM students');

    res.json({
      message: 'Student list displayed succesfully!',
      result
    });
  })

  // POST request - localhost:4000/api/students/
  .post(async (req, res) => {
    await pool.query('INSERT INTO students set ?', [req.body]);

    res.json({
      message: 'Student created succesfully!',
      result: req.body
    });
  });

router.route('/:id')
  // GET request - localhost:4000/api/students/[id]
  .get(async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM students WHERE student_id = ?', [id]);

    res.json({
      message: 'Student selected succesfully!',
      result
    });
  })

  // PUT request - localhost:4000/api/students/[id]
  .put(async (req, res) => {
    const { id } = req.params;
    await pool.query('UPDATE students set ? WHERE student_id = ?', [req.body, id]);
    const result = await pool.query('SELECT * FROM students WHERE student_id = ?', [id]);

    res.json({
      message: 'Student edited succesfully!',
      changes: req.body,
      result
    });
  })

  // DELETE request - localhost:4000/api/students/[id]
  .delete(async (req, res) => {
    const { id } = req.params;
    const temp = await pool.query('SELECT * FROM students WHERE student_id = ?', [id]);
    try {
      await pool.query('DELETE FROM students WHERE student_id = ?', [id]);
    } catch (e) {
      await pool.query('SET FOREIGN_KEY_CHECKS=0;');
      await pool.query('DELETE FROM students WHERE student_id = ?', [id]);
      await pool.query('DELETE * FROM posts WHERE student_id = ?', [id]);
      await pool.query('SET FOREIGN_KEY_CHECKS=1;');
    }

    res.json({
      message: 'Student and posts deleted succesfully!',
      alert: 'Registers below was deleted',
      result: temp
    });
  });

module.exports = router;
