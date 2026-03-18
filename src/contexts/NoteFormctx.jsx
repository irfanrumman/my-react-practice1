import { createContext, useState } from "react";

export const NoteFormctx = createContext();

const NoteFormProvider = (props) => {
  const { children } = props;
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
  const notevaluectx = {
    noteTitel,
    notes,
    editMode,
    changeTitelHandeler,
    submitHandeler,
    removeHandeler,
    editHandeler,
  };
  return (
    <NoteFormctx.Provider value={notevaluectx}>{children}</NoteFormctx.Provider>
  );
};
export default NoteFormProvider;
