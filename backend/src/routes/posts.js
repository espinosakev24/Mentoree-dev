const { Router } = require('express');
const router = Router();
const pool = require('../database');

router.route('/')
  // GET request - localhost:4000/api/posts/
  .get(async (req, res) => {
    const result = await pool.query('SELECT * FROM posts');
    const fullName = await Promise.all(result.map(async (name) => {
      const firstName = await pool.query('SELECT first_name FROM students WHERE student_id = ?', [name.student_id]);
      const lastName = await pool.query('SELECT last_name FROM students WHERE student_id = ?', [name.student_id]);
      return (firstName[0].first_name + ' ' + lastName[0].last_name);
    }));

    res.json({
      message: 'Post list displayed succesfully!',
      result,
      fullName
    });
  })

  // POST request - localhost:4000/api/posts/
  .post(async (req, res) => {
    try {
      await pool.query('INSERT INTO posts set ?', [req.body]);
      const post_id = await pool.query('SELECT LAST_INSERT_ID() AS last_id;');
      await pool.query('UPDATE students set post_id = ? WHERE student_id = ?', [post_id[0].last_id, req.body.student_id]);
      console.log('[API] - Post created succesfully!');
    } catch (e) {
      console.log('[API] - An error has ocurred while creating a post...');
    }

    res.json({
      message: '[API] - Post created succesfully!',
      result: req.body
    });
  });

router.route('/:id')
  // GET request - localhost:4000/api/posts/[id]
  .get(async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM posts WHERE post_id = ?', [id]);

    res.json({
      message: 'Post selected succesfully!',
      result
    });
  })

  // PUT request - localhost:4000/api/posts/[id]
  .put(async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    const { id } = req.params;
    await pool.query('UPDATE posts set ? WHERE post_id = ?', [req.body, id]);
    await pool.query('UPDATE teachers set post_id = ? WHERE ?', [id, req.body]);
    const result = await pool.query('SELECT * FROM posts WHERE post_id = ?', [id]);

    res.json({
      message: 'Post edited succesfully!',
      Change: req.body,
      result
    });
  })

  // DELETE request - localhost:4000/api/posts/[id]
  .delete(async (req, res) => {
    const { id } = req.params;
    const temp = await pool.query('SELECT * FROM posts WHERE Post_id = ?', [id]);
    try {
      await pool.query('DELETE FROM posts WHERE post_id = ?', [id]);
    } catch (e) {
      await pool.query('SET FOREIGN_KEY_CHECKS=0;');
      await pool.query('UPDATE teachers set post_id = NULL WHERE post_id = ?;', [id]);
      await pool.query('UPDATE students set post_id = NULL WHERE post_id = ?;', [id]);
      await pool.query('DELETE FROM posts WHERE post_id = ?', [id]);
      await pool.query('SET FOREIGN_KEY_CHECKS=1;');
    }

    res.json({
      message: 'Post deleted succesfully!',
      alert: 'Register below was deleted',
      result: temp
    });
  });

router.route('/students/:id')
  // GET request - localhost:4000/api/posts/students/[id]
  .get(async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM posts WHERE student_id = ?', [id]);

    res.json({
      message: 'Post selected succesfully!',
      result
    });
  });

router.route('/teachers/:id')
  // GET request - localhost:4000/api/posts/teachers/[id]
  .get(async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM posts WHERE teacher_id = ?', [id]);

    res.json({
      message: 'Post selected succesfully!',
      result
    });
  });

module.exports = router;
