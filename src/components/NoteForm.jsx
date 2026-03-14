import { useState } from "react";
import "../css/NoteForm.css";

const NoteForm = () => {
  const [noteTitel, setNoteTitel] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const changeTitelHandeler = (e) => {
    setNoteTitel(e.target.value);
  };

  const submitHandeler = (e) => {
    e.preventDefault();
    if (noteTitel.trim() === "") {
      return alert(`Please write here something...`);
    }
    editMode ? updateHandler() : createHandler();
  };
  const createHandler = () => {
    const newNote = {
      id: Date.now() + "",
      titel: noteTitel,
    };
    setNotes([newNote, ...notes]);
    setNoteTitel("");
  };
  const removeHandeler = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };
  const editHandeler = (noteItem) => {
    setEditMode(true);
    setEditableNote(noteItem);
    setNoteTitel(noteItem.titel);
  };

  const updateHandler = () => {
    const updatedNotes = notes.map((item) => {
      if (editableNote.id == item.id) {
        return { ...item, titel: noteTitel };
      }
      return item;
    });
    setNotes(updatedNotes);
    setNoteTitel("");
    setEditMode(false);
  };
  return (
    <>
      <div className="form">
        <form onSubmit={submitHandeler}>
          <h2>Add Your Note Here!</h2>
          <input type="text" value={noteTitel} onChange={changeTitelHandeler} />
          <button type="submit">{editMode ? "Update note" : "Add note"}</button>
        </form>
      </div>
      <div className="notesArea">
        <h3>All Notes is Here!</h3>
        <ul>
          {notes.map((noteItem) => (
            <li key={noteItem.id}>
              <span>{noteItem.titel}</span>
              <button onClick={() => editHandeler(noteItem)}>Edit</button>
              <button onClick={() => removeHandeler(noteItem.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NoteForm;
