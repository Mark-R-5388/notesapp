import { useState } from "react";
import AddNoteModal from "./components/AddNoteModal";
import BlankNotes from "./components/BlankNotes";
import Header from "./components/Header";
import NoteBoard from "./components/NoteBoard";
import UpdateNoteModal from "./components/UpdateNoteModal";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({});
  const [noteToUpdate, setNoteToUpdate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showError, setShowError] = useState(true);

  const randomId = () => {
    return Math.floor(Math.random() * 10000);
  };

  const createNewNote = (title, text) => {
    if (title === "" || text === "") {
      setShowError(true);
      setShowModal(true);
    }
    if (title !== "" && text !== "") {
      const newNote = { id: randomId(), title, text };
      setNotes((prevList) => [...prevList, newNote]);
      setShowModal(false);
    }
  };

  const deleteNote = (id) => {
    setNotes(
      notes.filter((note) => {
        return note.id !== id;
      })
    );
  };

  const updateNote = (note) => {
    setNoteToUpdate(note);
    setShowUpdateModal(true);
  };

  const createUpdatedNote = (title, text) => {
    if (title !== "" && text !== "") {
      let updateNote = { ...noteToUpdate, title: title, text: text };
      const filteredNotes = notes.filter((note) => {
        return note.id !== noteToUpdate.id;
      });
      setNotes([...filteredNotes, updateNote]);
      setShowUpdateModal(false);
    } else {
      setShowError(true);
      setShowUpdateModal(true);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="main_container">
        <button className="add_note_button" onClick={() => setShowModal(true)}>
          Add Note
        </button>
        {/* with notes added */}
        {!showModal && notes.length > 0 && (
          <>
            <NoteBoard
              notes={notes}
              updateNote={updateNote}
              deleteNote={deleteNote}
            />
          </>
        )}

        {/* with no notes added */}
        {!showModal && notes.length === 0 && <BlankNotes />}

        {/* Update Note */}
        {showUpdateModal && (
          <UpdateNoteModal
            noteToUpdate={noteToUpdate}
            createUpdatedNote={createUpdatedNote}
            showError={showError}
          />
        )}

        {/* Add New Note */}
        {showModal && (
          <AddNoteModal
            createNewNote={createNewNote}
            newNote={newNote}
            setNewNote={setNewNote}
            showError={showError}
          />
        )}
      </div>
    </div>
  );
}

export default App;
