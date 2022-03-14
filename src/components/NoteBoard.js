import { useState } from "react";
import Button from "./Button";

const NoteBoard = ({ notes, deleteNote, updateNote }) => {
  return (
    <>
      <main className="note_board">
        {notes.map((note) => (
          <div className="note_container" key={note.id}>
            <h3 className="note_title">{note.title}</h3>
            <p className="note_text">{note.text}</p>
            <Button
              buttonFunction={() => deleteNote(note.id)}
              title={"Delete Note"}
            />
            <Button
              buttonFunction={() => updateNote(note)}
              title={"Update Note"}
            />
          </div>
        ))}
      </main>
    </>
  );
};

export default NoteBoard;
