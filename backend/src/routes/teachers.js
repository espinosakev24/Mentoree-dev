const { Router } = require('express');
const router = Router();
const pool = require('../database');


router.route('/')
  // GET request - localhost:4000/api/teachers/
  .get(async (req, res) => {
    const result = await pool.query('SELECT * FROM teachers');

    res.json({
      message: 'Teacher list displayed succesfully!',
      result
    });
  })

  // POST request - localhost:4000/api/teachers/
  .post(async (req, res) => {
    await pool.query('INSERT INTO teachers set ?', [req.body]);

    res.json({
      message: 'Teacher created succesfully!',
      result: req.body
    });
  });

router.route('/:id')
  // GET request - localhost:4000/api/teachers/[id]
  .get(async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM teachers WHERE teacher_id = ?', [id]);

    res.json({
      message: 'Teacher selected succesfully!',
      result
    });
  })

  // PUT request - localhost:4000/api/teachers/[id]
  .put(async (req, res) => {
    const { id } = req.params;
    await pool.query('UPDATE teachers set ? WHERE teacher_id = ?', [req.body, id]);
    const result = await pool.query('SELECT * FROM teachers WHERE teacher_id = ?', [id]);

    res.json({
      message: 'Teacher edited succesfully!',
      changes: req.body,
      result
    });
  })

  // DELETE request - localhost:4000/api/teachers/[id]
  .delete(async (req, res) => {
    const { id } = req.params;
    const temp = await pool.query('SELECT * FROM teachers WHERE teacher_id = ?', [id]);
    try {
      await pool.query('DELETE FROM teachers WHERE teacher_id = ?', [id]);
    } catch (e) {
      await pool.query('SET FOREIGN_KEY_CHECKS=0;');
      await pool.query('DELETE FROM teachers WHERE teacher_id = ?', [id]);
      await pool.query('UPDATE posts set teacher_id = NULL WHERE teacher_id;', [id]);
      await pool.query('SET FOREIGN_KEY_CHECKS=1;');
    }

    res.json({
      message: 'teacher deleted succesfully!',
      alert: 'Register below was deleted',
      result: temp
    });
  });

module.exports = router;
