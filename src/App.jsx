import "./App.css";
import NoteForm from "./components/NoteForm";
import StudentList from "./components/StudentList";
import NoteFormProvider from "./contexts/NoteFormctx";
import StudentProvider from "./contexts/Studentctx";

function App() {
  return (
    <>
      <NoteFormProvider>
        <NoteForm />
      </NoteFormProvider>
      <StudentProvider>
        <StudentList />
      </StudentProvider>
    </>
  );
}

export default App;
