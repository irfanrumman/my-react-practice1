import React, { useState } from "react";
import "../css/NoteForm.css";

function StudentList() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableMode, setEditableMode] = useState(null);

  const changeStudentHandler = (e) => {
    setStudentName(e.target.value);
  };
  const submiHandler = (e) => {
    e.preventDefault();
    if (studentName.trim() == "") {
      return alert(`Please, Enter A Student's Name!`);
    }
    editMode ? updateHandler() : createHandler();
  };

  const createHandler = () => {
    const creatStudentName = {
      id: Date.now() + "",
      name: studentName,
      isPresant: undefined,
    };
    setStudents([...students, creatStudentName]);
    setStudentName("");
  };

  const removeHandeler = (student) => {
    const fileredArray = students.filter(
      (studentItem) => studentItem.id !== student.id,
    );
    setStudents(fileredArray);
  };

  const editHandeler = (student) => {
    setEditMode(true);
    setEditableMode(student);
    setStudentName(student.name);
  };
  const updateHandler = () => {
    setStudents(
      students.map((studentItem) => {
        if (studentItem.id == editableMode.id) {
          return { ...studentItem, name: studentName };
        }
        return studentItem;
      }),
    );
    setEditMode(false);
    setStudentName("");
  };

  const makePresentHandler = (student) => {
    if (student.isPresant !== undefined) {
      return alert(
        `The Student is in the ${student.isPresant === true ? "Presen List" : "Absent List"}`,
      );
    }
    setStudents(
      students.map((studentItem) => {
        if (studentItem.id == student.id) {
          return { ...studentItem, isPresant: true };
        }
        return studentItem;
      }),
    );
  };
  const makeAbsentHandler = (student) => {
    if (student.isPresant !== undefined) {
      return alert(
        `The Student is in the ${student.isPresant === true ? "Presen List" : "Absent List"}`,
      );
    }
    setStudents(
      students.map((studentItem) => {
        if (studentItem.id == student.id) {
          return { ...studentItem, isPresant: false };
        }
        return studentItem;
      }),
    );
  };

  const toggoleList = (student) => {
    setStudents(
      students.map((studentItem) => {
        if (studentItem.id == student.id) {
          return { ...studentItem, isPresant: !studentItem.isPresant };
        }
        return studentItem;
      }),
    );
  };

  return (
    <>
      <div className="studentForm">
        <div className="form">
          <form onSubmit={submiHandler}>
            <h2>Add Student Name Here!</h2>
            <input
              type="text"
              value={studentName}
              onChange={changeStudentHandler}
            />
            <button type="submit">
              {editMode ? "Update Student" : "Add Student"}
            </button>
          </form>
        </div>
        <div className="studenList">
          <div className="allStudents">
            <h2>All Stuends </h2>
            <div className="list">
              <ul>
                {students.map((student) => (
                  <li key={student.id}>
                    {student.name}
                    <button onClick={() => editHandeler(student)}>Edit</button>
                    <button onClick={() => removeHandeler(student)}>
                      Delete
                    </button>
                    <button onClick={() => makePresentHandler(student)}>
                      Make Present
                    </button>
                    <button onClick={() => makeAbsentHandler(student)}>
                      Make Absent
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="presantStudent">
            <h2>Present Student</h2>
            <div className="list">
              <ul>
                {students
                  .filter((item) => item.isPresant === true)
                  .map((student) => (
                    <li key={student.id}>
                      <span>{student.name}</span>
                      <button onClick={() => toggoleList(student)}>
                        Accedantly Added
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="absentStudent">
            <h2>Absent Student</h2>
            <div className="list">
              <ul>
                {students
                  .filter((student) => student.isPresant === false)
                  .map((student) => (
                    <li key={student.id}>
                      <span>{student.name}</span>
                      <button onClick={() => toggoleList(student)}>
                        Accedantly Added
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentList;
