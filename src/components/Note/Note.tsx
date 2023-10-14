import React from "react";
import { MdDeleteForever } from "react-icons/md";

type NoteProps = {
  id: string;
  text: string;
  date: Date;
  deleteNote: (id: string) => void;
};

function Note({ id, date, text, deleteNote }: NoteProps) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date.toString()}</small>
        <MdDeleteForever onClick={() => deleteNote(id)} className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}

export default Note;
