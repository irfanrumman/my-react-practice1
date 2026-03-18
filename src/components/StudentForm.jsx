import { useContext } from "react";
import { Studentctx } from "../contexts/Studentctx";

const StudentForm = () => {
  const { submiHandler, studentName, editMode, changeStudentHandler } =
    useContext(Studentctx);
  return (
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
  );
};

export default StudentForm;
