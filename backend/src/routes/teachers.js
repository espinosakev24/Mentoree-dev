const { Router } = require('express');
const router = Router();
const pool = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Teacher = require('../models/teachersMod');

process.env.SECRET_KEY = 'secret';


router.route('/register')
  // GET request - localhost:4000/api/teachers/register
  .post((req, res) => {
    const newTeacher = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      contact: req.body.contact,
      password: req.body.password,
      location: req.body.location,
      age: req.body.age,
      email: req.body.email,
      education: req.body.education,
      biography: req.body.biography,
      fields: req.body.fields,
      methodology: req.body.methodology
    }

    Teacher.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(teacher => {
      if(!teacher) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          newTeacher.password = hash;
          Teacher.create(newTeacher)
            .then(teacher => {
              res.json({status: teacher.email + 'registered'})
            })
            .catch(err => {
              res.send('error: ' + err);
            })
        })
      } else {
        res.json({error: "User already exists"})
      }
    })
    .catch(err => {
      res.send('error: ' + err);
    })
  });



router.route('/login')
  // POST request - localhost:4000/api/teachers/login
  .post((req, res) => {
    Teacher.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(teacher => {
      if(teacher) {
        if(bcrypt.compareSync(req.body.password, teacher.password)) {
          let token = jwt.sign(teacher.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' }) 
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
  })



router.route('/profile')
  // GET request - localhost:4000/api/teachers/profile
  .get((req, res) => {
    let decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

    Teacher.findOne({
      where: {
        teacher_id: decoded.teacher_id
      }
    })
    .then(teacher => {
      if (teacher) {
        res.json(teacher);
      } else {
        res.send('Teacher does not exist');
      }
    })
    .catch(err => {
      res.send('error: ' + err);
    })
  });



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



  router.route('/posts/:id')
  // GET request - localhost:4000/api/teachers/posts/[id]
    .get(async (req, res) => {
      const { id } = req.params;
      const result = await pool.query('SELECT * FROM posts WHERE teacher_id = ?', [id]);

      res.json({
        message: 'Post(s) from teacher selected succesfully!',
        result
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
