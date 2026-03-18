import { createContext, useState } from "react";

export const Studentctx = createContext();

const StudentProvider = (props) => {
  const { children } = props;
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
  const ctxValue = {
    studentName,
    setStudentName,
    students,
    setStudents,
    editMode,
    setEditMode,
    editableMode,
    setEditableMode,
    changeStudentHandler,
    submiHandler,
    createHandler,
    removeHandeler,
    editHandeler,
    updateHandler,
    makePresentHandler,
    makeAbsentHandler,
    toggoleList,
  };
  return <Studentctx.Provider value={ctxValue}>{children}</Studentctx.Provider>;
};
export default StudentProvider;
