// Note.tsx

import React, { useState } from 'react';
import './Note.css';

interface NoteProps {
  id: number;
  text: string;
  priority: number;
  category: string;
  onEdit: (newText: string) => void;
  onDelete: Function;
}

function Note({
  id,
  text,
  priority,
  category,
  onEdit,
  onDelete,
}: NoteProps) {
  const [isEditing, setEditing] = useState(false);

  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setEditing(false);
  };
  const getBackgroundColor = () => {
    switch (category) {
      case 'home':
        return 'lightblue';
      case 'hobby':
        return 'lightgreen';
      case 'work':
        return 'lightcoral';
      case 'fun':
        return 'lightyellow';
      default:
        return 'lightgray';
    }
  };

  return (


    <div style={{ backgroundColor: getBackgroundColor() }} className={`Note priority-${priority}`}>
      {isEditing ? (
        <>
          <div className='noteText'>
            <textarea
              className='textare'
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              rows={4}
            />
            <button onClick={handleSaveClick} className='save'>
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div className='noteED'>
            <div className='stuff'>
              <p className='text'>{text}</p>
              <p>Priority: {priority}</p>
              <p>Category: {category}</p>
            </div>
            <div className='ED'>
              <button onClick={handleEditClick} className='Edit'>
                Edit
              </button>
              <button onClick={() => onDelete(id)} className='Delete'>
                Delete
              </button>
            </div>
          
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
