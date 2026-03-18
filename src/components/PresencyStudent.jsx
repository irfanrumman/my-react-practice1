import { useContext } from "react";
import { Studentctx } from "../contexts/Studentctx";

const PresencyStudent = () => {
  const { students, toggoleList } = useContext(Studentctx);
  return (
    <>
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
    </>
  );
};
export default PresencyStudent;
