import React from "react";
import Note from "../Note/Note";
import { TNote } from "../../types/types";
import AddNote from "../AddNote/AddNote";

type NoteListProps = {
  notes: TNote[];
  addNote: (text: string) => void;
  deleteNote: (id: string) => void;
};

function NotesList({ notes, addNote, deleteNote }: NoteListProps) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          date={note.date}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}
      <AddNote addNote={addNote} />
    </div>
  );
}

export default NotesList;
