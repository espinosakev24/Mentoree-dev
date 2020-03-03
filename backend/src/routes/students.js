const { Router } = require('express');
const router = Router();
const pool = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Student = require('../models/studentsMod');

process.env.SECRET_KEY = 'secret';
/*
router.route('/test')
  .get(async (req, res) => {
    const result = await pool.query('SELECT email FROM students');

    for (let i = 0; i < result.length; i++) {
      if (result[i].email === "mrdoom.official@gmail.com") {
        console.log("It works");
      }
    }

    res.json({
      message: 'TEST!',
      result
    });
  });
*/

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
    /*const newStudent = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      contact: req.body.contact,
      password: req.body.password,
      location: req.body.location,
      age: req.body.age,
      email: req.body,email,
      education: req.body.education
    }

    Student.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(student => {
      if(!student) {
        bcrypt.hash(req.password, 10, (err, hash) => {
          newStudent.password = hash;
          Student.create(UserData)
          .then(user => {
            res.json()
          })
        })
      }
    })
  */
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
