import { useState } from "react";
import AddNoteModal from "./components/AddNoteModal";
import Header from "./components/Header";
import NoteBoard from "./components/NoteBoard";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "text1", text: "text1" },
    { id: 2, title: "text2", text: "text2" },
    { id: 3, title: "text3", text: "text3" },
    { id: 4, title: "text4", text: "text4" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState({});

  const createNewNote = (title, text) => {
    const newNote = { id: notes.length + 1, title, text };
    setNotes((prevList) => [...prevList, newNote]);
    setShowModal(false);
  };

  const deleteNote = (id) => {
    console.log(id);
  };

  return (
    <div className="App">
      <Header />
      {!showModal && (
        <>
          <button
            className="add_note_button"
            onClick={() => setShowModal(true)}
          >
            Add Note
          </button>
          <NoteBoard notes={notes} />
        </>
      )}
      {showModal && (
        <AddNoteModal
          createNewNote={createNewNote}
          newNote={newNote}
          setNewNote={setNewNote}
          deleteNote={deleteNote}
        />
      )}
    </div>
  );
}

export default App;
