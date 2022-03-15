import { useState } from "react";

const UpdateNoteModal = ({ noteToUpdate, createUpdatedNote, showError }) => {
  const [updateTitle, setUpdateTitle] = useState(noteToUpdate.title);
  const [updateText, setUpdateText] = useState(noteToUpdate.text);

  return (
    <div className="modal_page">
      <div className="modal_container">
        {showError && <p className="error_message">Update Your Note Below</p>}
        <label className="input_label" htmlFor="title">
          Note Title
        </label>
        <input
          className="input_container"
          id="title"
          type="text"
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />

        <label className="input_label" htmlFor="text">
          Note Text
        </label>
        <input
          className="input_container"
          id="text"
          type="text"
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
        />

        <button
          className="modal_add_button"
          onClick={() => createUpdatedNote(updateTitle, updateText)}
        >
          Update Note
        </button>
      </div>
    </div>
  );
};

export default UpdateNoteModal;
