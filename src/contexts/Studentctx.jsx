import { createContext, useReducer, useState } from "react";
import studentReducer from "../reducers/student.js";
export const Studentctx = createContext();

const StudentProvider = (props) => {
  const initialState = {
    studentName: "",
    students: [],
    editMode: false,
    editableMode: null,
  };
  const [studentsState, dispatch] = useReducer(studentReducer, initialState);

  const changeStudentHandler = (e) => {
    dispatch({
      type: "changeStudentHandler",
      payload: e.target.value,
    });
  };
  const submiHandler = (e) => {
    e.preventDefault();
    if (studentsState.studentName.trim() == "") {
      return alert(`Please, Enter A Student's Name!`);
    }
    studentsState.editMode
      ? dispatch({ type: "updateStudent" })
      : dispatch({ type: "createStudent" });
  };

  const removeHandeler = (student) => {
    dispatch({
      type: "removeHandeler",
      payload: student.id,
    });
  };

  const editHandeler = (student) => {
    dispatch({
      type: "editHandeler",
      payload: {
        name: student.name,
        id: student.id,
      },
    });
  };

  const makePresentHandler = (student) => {
    if (student.isPresant !== undefined) {
      return alert(
        `The Student is in the ${student.isPresant == true ? "Presen List" : "Absent List"}`,
      );
    }
    dispatch({
      type: "makePresentHandler",
      payload: {
        id: student.id,
        isPresant: true,
      },
    });
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresant !== undefined) {
      return alert(
        `The Student is in the ${student.isPresant === true ? "Presen List" : "Absent List"}`,
      );
    }
    dispatch({
      type: "makePresentHandler",
      payload: {
        id: student.id,
        isPresant: false,
      },
    });
  };

  const toggoleList = (student) => {
    dispatch({
      type: "toggoleList",
      payload: student.id,
    });
  };
  const ctxValue = {
    studentsState,
    dispatch,
    changeStudentHandler,
    submiHandler,
    removeHandeler,
    editHandeler,
    makePresentHandler,
    makeAbsentHandler,
    toggoleList,
  };
  return (
    <Studentctx.Provider value={ctxValue}>{props.children}</Studentctx.Provider>
  );
};
export default StudentProvider;
