import "./App.css";
import { useState, useEffect } from "react";
import noteService from "./services/note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const fetchedNote = await noteService.getAll();
        setNotes(fetchedNote);
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      }
    };
    fetchNote();
  }, []);

  const handleSubimt = async (e) => {
    e.preventDefault();
    console.log(userInput);

    const newObject = {
      content: userInput,
      important: Math.random() > 0.5,
    };

    const neNote = await noteService.create(newObject);
    setNotes(notes.concat(neNote));
    setUserInput("");
  };

  const handleDelete = async (id) => {
    const deleted = await noteService.deleteContent(id);
    setNotes((prev)=>prev.filter((note)=> note.id !== deleted.id ))
    // setNotes((prev) => prev.filter((note) => note.id !== deleted.id));
    console.log(deleted);
  };
    const handleEditClick = (note) => {
    setEditingId(note.id);
    setEditInput(note.content);
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditInput("");
  };

  const handleEditSave = async (id) => {
    const updatedNote = await noteService.update(id, { content: editInput });
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? updatedNote : note))
    );
    setEditingId(null);
    setEditInput("");
  };

  return (
    <>
      <div>
        <h2>Input field</h2>
        <form onSubmit={handleSubimt}>
          <label>
            content:
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="type here"
            />
            <button>Submit</button>
          </label>
        </form>
      </div>
      <div>
        <h1>My notes</h1>
        {notes.map((note) => (
          <p key={note.id}>
            {editingId === note.id ? (
              <>
                <input
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                  autoFocus
                />
                <button onClick={() => handleEditSave(note.id)}>Save</button>
                <button onClick={handleEditCancel}>Cancel</button>
              </>
            ) : (
              <>
                {note.content}
                <button onClick={() => handleEditClick(note)}>Edit</button>
                <button onClick={() => handleDelete(note.id)}>Delete</button>
              </>
            )}
          </p>
        ))}
      </div>
    </>
  );
};
export default App;