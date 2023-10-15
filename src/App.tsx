import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import NotesList from "./components/NotesList/NotesList";
import Search from "./components/Search/Search";
import { TNote } from "./types/types";

//1:05:58
//https://www.youtube.com/watch?v=8KB3DHI-QbM

const KEY_NOTE = "app-note-data";

function App() {
  const [notes, setNotes] = useState<TNote[]>([
    // {
    //   id: nanoid(),
    //   text: "receba carai",
    //   date: new Date(),
    // },
    // {
    //   id: nanoid(),
    //   text: "luva",
    //   date: new Date(),
    // },
  ]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem(KEY_NOTE) || "");

    if (savedNotes.length > 0) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_NOTE, JSON.stringify(notes));
  }, [notes]);

  function addNote(text: string) {
    console.log(text);
    const date = new Date();
    const newNote: TNote = {
      id: nanoid(),
      text: text,
      date: date,
    };
    const newNotes: TNote[] = [...notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id: string) {
    const filtredNotes = notes.filter((note) => note.id !== id);
    setNotes(filtredNotes);
  }

  return (
    <div className="container">
      <Header />
      <Search searchNote={setSearch} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(search.toLowerCase())
        )}
        addNote={addNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
