import { useState } from 'react';
import Note from './Note';

function NoteBoard(props) {
  const [notes, setNotes] = useState([
    {
      id: 0,
      title: 'New note',
      content: 'Write your note here'
    },
    {
      id: 0,
      title: 'New note',
      content: 'Write your note here'
    },
    {
      id: 0,
      title: 'New note',
      content: 'Write your note here'
    },
    {
      id: 0,
      title: 'New note',
      content: 'Write your note here'
    },
    {
      id: 0,
      title: 'New note',
      content: 'Write your note here'
    }
  ]);

  function handleNoteChange(id, value) {
    setNotes(prev => (
      [...prev].map(note => {
        return note.id === id ? { ...note, ...value } : note;
      })
    ));
  }

  return (
    <section className='my-5 px-4'>
      <div className='container'>
        <div className="columns is-multiline is-centered">

          {notes.map(n => (
            <div className="column is-one-third is-flex is-justify-content-space-around">
              <Note
                id={n.id}
                title={n.title}
                content={n.content}
                onChange={handleNoteChange}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default NoteBoard;