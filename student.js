const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE
router.post('/', (req, res) => {
  const { name, email, class_name, age, gender } = req.body;
  const sql = 'INSERT INTO students (name, email, class, age, gender) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, email, class_name, age, gender], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Student added!', id: result.insertId });
  });
});

// READ
router.get('/', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  const { name, email, class_name, age, gender } = req.body;
  const sql = 'UPDATE students SET name=?, email=?, class=?, age=?, gender=? WHERE id=?';
  db.query(sql, [name, email, class_name, age, gender, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Student updated!' });
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM students WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Student deleted!' });
  });
});

module.exports = router;
