import { ChangeEvent, useState } from "react";

type AddNoteProps = {
  addNote: (text: string) => void;
};

const CHAR_LIMIT = 200;

function AddNote({ addNote }: AddNoteProps) {
  const [noteText, setNoteText] = useState("");

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (CHAR_LIMIT - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  }

  function handleSave() {
    if (noteText.trim().length > 0) {
      addNote(noteText);
      setNoteText("");
    }
  }

  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        placeholder="Typpe to add note..."
        onChange={handleChange}
        value={noteText}
      />
      <div className="note-footer">
        <small>{CHAR_LIMIT - noteText.length} Remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
