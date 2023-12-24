import React, { useState } from 'react';
import AddNoteForm from './component/AddNoteForm';
import NotesList from './component/NotesList';
import './main.css';
type Note = {
 id: number;
 text: string;
 priority: number;
 category: string;
};

const App = () => {
 const [notes, setNotes] = useState<Note[]>([]);

 const handleDelete = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
 };

 const handleEdit = (id: number, newText: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
 };

 const handleAdd = (text: string, priority: number, category: string) => {
  const newNote: Note = {
    id: new Date().getTime(),
    text: text,
    priority: priority,
    category: category,
  };
  setNotes((prevNotes) => [...prevNotes, newNote]);
};


 return (
    <div>
      <h1>React Note App</h1>
      <div className='main'>
        <AddNoteForm onAdd={handleAdd} />
        <NotesList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
 );
};

export default App;