import "../css/NoteForm.css";
import AllStudents from "./AllStudent";
import PresencyStudent from "./PresencyStudent";
import StudentForm from "./StudentForm";

function StudentList() {
  return (
    <>
      <div className="studentForm">
        <StudentForm />
        <div className="studenList">
          <AllStudents />
          <PresencyStudent />
        </div>
      </div>
    </>
  );
}

export default StudentList;
