const { Router } = require('express');
const router = Router();
const pool = require('../database');

router.route('/')
  // GET request - localhost:4000/api/posts/
  .get(async (req, res) => {
    const result = await pool.query('SELECT * FROM posts');

    res.json({
      message: 'Post list displayed succesfully!',
      result
    });
  })

  // POST request - localhost:4000/api/posts/
  .post(async (req, res) => {
    await pool.query('INSERT INTO posts set ?', [req.body]);

    res.json({
      message: 'Post created succesfully!',
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
    const { id } = req.params;
    await pool.query('UPDATE posts set ? WHERE post_id = ?', [req.body, id]);
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
      await pool.query('DELETE FROM posts WHERE post_id = ?', [id]);
      await pool.query('UPDATE teachers set post_id = NULL WHERE post_id;', [id]);
      await pool.query('UPDATE students set post_id = NULL WHERE post_id;', [id]);
      await pool.query('SET FOREIGN_KEY_CHECKS=1;');
    }

    res.json({
      message: 'Post deleted succesfully!',
      alert: 'Register below was deleted',
      result: temp
    });
  });

module.exports = router;
