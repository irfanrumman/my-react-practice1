import { useContext } from "react";
import { NoteFormctx } from "../contexts/NoteFormctx";

const NoteSubmitbtn = () => {
  const { submitHandeler, changeTitelHandeler, noteTitel, editMode } =
    useContext(NoteFormctx);
  return (
    <div className="form">
      <form onSubmit={submitHandeler}>
        <h2>Add Your Note Here!</h2>
        <input type="text" value={noteTitel} onChange={changeTitelHandeler} />
        <button type="submit">{editMode ? "Update note" : "Add note"}</button>
      </form>
    </div>
  );
};
export default NoteSubmitbtn;
