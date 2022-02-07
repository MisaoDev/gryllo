import { useRef, useState } from 'react';

import Note from './Note';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

import {getEmptyNote, getRandomNote} from '../../util/NoteBuilder';
import './NoteBoard.scss';

function NoteBoard(props) {

  /* ---------------------------- Note ID generator --------------------------- */
  const nextId = useRef(0);
  function getNewId() {
    return nextId.current++;
  }

  /* ----------------------------- Note list state ---------------------------- */
  const [notes, setNotes] = useState(() => {
    return [...Array(5).keys()]
      .map(() => {
        let id = getNewId();
        return getRandomNote(id);
      });
  });

  /* -------------------------------- Handlers -------------------------------- */
  function handleNoteChange(id, value) {
    setNotes(prev => (
      [...prev].map(note => {
        return note.id === id ? { ...note, ...value } : note;
      })
    ));
  }

  function handleAddNote(index) {
    const id = getNewId();
    const note = getEmptyNote(id);
    
    setNotes(prev => {
      const newNotes = prev.slice();
      newNotes.splice(index, 0, note);
      return newNotes;
    });
  }

  function handleDeleteNote(index) {
    setNotes(prev => {
      const newNotes = prev.slice();
      newNotes.splice(index, 1);
      return newNotes.length === 0
        ? [getEmptyNote(getNewId())]
        : newNotes;
    });
  }
  /* -------------------------------------------------------------------------- */
  
  return (
    <section className='note-board'>
      <div className='container px-3'>
        <div className="columns is-multiline is-centered is-vcentered px-6">

          {notes.map((n, index) => (
            <div key={n.id} className="note-column column is-one-third is-flex is-justify-content-space-around">

              {/* Render the left AddButton only for the first note in each row */}
              {index % 3 !== 0 ? null : (
                <AddButton
                  isLeft={true}
                  isFirst={index === 0}
                  position={index}
                  onAddNote={handleAddNote}
                />
              )}
              
              <Note
                id={n.id}
                title={n.title}
                content={n.content}
                color={n.color}
                onChange={handleNoteChange}
              />

              {/* Hidden by default, will be shown with CSS */}
              <DeleteButton
                noteIndex={index}
                onDeleteNote={handleDeleteNote}
              />

              {/* Always show the right-hand AddButton */}
              <AddButton
                is-left={false}
                position={index + 1}
                onAddNote={handleAddNote}
              />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default NoteBoard;