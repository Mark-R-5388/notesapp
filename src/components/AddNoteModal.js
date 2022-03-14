import { useEffect, useState } from "react";
import "./AddNoteModal.css";

const AddNoteModal = ({ createNewNote, newNote, setNewNote }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  return (
    <div className="modal_page">
      <div className="modal_container">
        <label className="input_label" htmlFor="title">
          Note Title
        </label>
        <input
          className="input_container"
          id="title"
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />

        <label className="input_label" htmlFor="text">
          Note Text
        </label>
        <input
          className="input_container"
          id="text"
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />

        <button
          className="modal_add_button"
          onClick={() => createNewNote(noteTitle, noteText)}
        >
          Set Note
        </button>
      </div>
    </div>
  );
};

export default AddNoteModal;
