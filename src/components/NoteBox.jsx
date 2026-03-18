import { useContext } from "react";
import { NoteFormctx } from "../contexts/NoteFormctx";

const NoteBox = () => {
  const { notes, editHandeler, removeHandeler } = useContext(NoteFormctx);
  return (
    <div className="notesArea">
      <h3>All Notes is Here!</h3>
      <ul>
        {notes.map((noteItem) => (
          <li key={noteItem.id}>
            <span>{noteItem.titel}</span>
            <button onClick={() => editHandeler(noteItem)}>Edit</button>
            <button onClick={() => removeHandeler(noteItem.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NoteBox;
