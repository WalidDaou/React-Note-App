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

  const handleEditCategoryPriority = (id: number, newCategory: string, newPriority: number) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, category: newCategory, priority: newPriority } : note
      )
    );
  };

  return (
    <div>
      <div className='main'>
        
        <NotesList
          notes={notes}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onEditCategoryPriority={handleEditCategoryPriority}/>
        <AddNoteForm onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default App;
