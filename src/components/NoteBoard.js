import "./NoteBoard.css";
import Button from "./Button";

const NoteBoard = ({ notes, deleteNote, updateNote }) => {
  return (
    <>
      <div className="note_board">
        {notes.map((note) => (
          <div className="note_container" key={note.id}>
            <h3 className="note_title">{note.title}</h3>
            <p className="note_text">{note.text}</p>
            <div className="note_buttons_container">
              <Button
                buttonFunction={() => deleteNote(note.id)}
                title={"Delete"}
              />
              <Button
                buttonFunction={() => updateNote(note)}
                title={"Update"}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteBoard;
