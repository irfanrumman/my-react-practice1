import { useContext } from "react";
import { Studentctx } from "../contexts/Studentctx";

const AllStudents = () => {
  const {
    students,
    editHandeler,
    removeHandeler,
    makePresentHandler,
    makeAbsentHandler,
  } = useContext(Studentctx);
  return (
    <div className="allStudents">
      <h2>All Stuends </h2>
      <div className="list">
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name}
              <button onClick={() => editHandeler(student)}>Edit</button>
              <button onClick={() => removeHandeler(student)}>Delete</button>
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
  );
};
export default AllStudents;
