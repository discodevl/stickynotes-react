import {useState} from 'react';
import NotesList from "./components/NotesList/NotesList";
//21:36 
//https://www.youtube.com/watch?v=8KB3DHI-QbM
function App() {
  const [notes, setNotes] = useState();
  return (
    <div className="container">
      <NotesList />
    </div>
  );
}

export default App;
