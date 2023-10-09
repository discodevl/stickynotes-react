import { useState } from "react";
import NotesList from "./components/NotesList/NotesList";
import { TNote } from "./types/types";
import { nanoid } from "nanoid";

//56:15
//https://www.youtube.com/watch?v=8KB3DHI-QbM

function App() {
  const [notes, setNotes] = useState<TNote[]>([
    {
      id: nanoid(),
      text: "receba carai",
      date: new Date(),
    },
    {
      id: nanoid(),
      text: "luva",
      date: new Date(),
    },
  ]);

  function addNote(text:string) {
    console.log(text);
    const date = new Date();
    const newNote:TNote = {
      id: nanoid(),
      text: text,
      date: date,
    }
    const newNotes:TNote[] = [...notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id:string) {
    const filtredNotes = notes.filter(note => note.id !== id);
    setNotes(filtredNotes);
  }

  return (
    <div className="container">
      <NotesList notes={notes} addNote={addNote} deleteNote={deleteNote}/>
    </div>
  );
}

export default App;
