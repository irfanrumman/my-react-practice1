import { useContext } from "react";
import { Studentctx } from "../contexts/Studentctx";

const StudentForm = () => {
  const { studentsState, submiHandler, changeStudentHandler } =
    useContext(Studentctx);
  return (
    <div className="form">
      <form onSubmit={submiHandler}>
        <h2>Add Student Name Here!</h2>
        <input
          type="text"
          value={studentsState.studentName}
          onChange={changeStudentHandler}
        />
        <button type="submit">
          {studentsState.editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
