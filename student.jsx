/*
import React from 'react';

const StudentList = ({ students, fetchStudents, setEditingStudent }) => {
  const deleteStudent = (id) => {
    fetch("/backend/delete.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    }).then(() => fetchStudents());
  };

  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Age</th><th>Grade</th><th>Actions</th></tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.age}</td>
            <td>{s.grade}</td>
            <td>
              <button onClick={() => setEditingStudent(s)}>Edit</button>
              <button onClick={() => deleteStudent(s.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default StudentList;
*/
