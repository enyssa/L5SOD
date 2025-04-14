import React, { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './index.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = () => {
    fetch('/backend/read.php')
      .then(res => res.json())
      .then(data => setStudents(data));
  };

  useEffect(() => {
    fetchStudents();
  }, 
  []);

  return (
    <div className="container">
      <h1>Student CRUD</h1>
      <StudentForm fetchStudents={fetchStudents} editingStudent={editingStudent} setEditingStudent={setEditingStudent} />
      <StudentList students={students} fetchStudents={fetchStudents} setEditingStudent={setEditingStudent} />
    </div>
  );
};

export default App;
