import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Note from './Note';

const randomTitle = require('random-title');
const randomSentence = require('random-sentence');
const randomColor = require('random-color');
const Color = require('color');



function NoteBoard(props) {
  const [notes, setNotes] = useState(
    [...Array(5).keys()].map(x => getRandomNote(x))
  );

  function getEmptyNote(id) {
    return {
      id: id,
      title: 'New note',
      content: 'Write your note here',
      color: randomColor(0.3, 0.9).hexString(),
    };
  }

  function getRandomNote(id) {
    return {
      id: id,
      title: randomTitle({ min: 1, max: 4 }),
      content: randomSentence({ min: 5, max: 17 }),
      color: randomColor(0.2, 1).hexString(),
    };
  }

  function handleNoteChange(id, value) {
    setNotes(prev => (
      [...prev].map(note => {
        return note.id === id ? { ...note, ...value } : note;
      })
    ));
  }

  function handleAddNote(event, index) {
    const id = notes.length;
    const newNote = getEmptyNote(id);

    setNotes(prev => {
      const newArray = prev.slice();
      newArray.splice(index, 0, newNote);
      return newArray;
    });
  }

  function handleDeleteNote(event, index) {
    console.log(index);
    setNotes(prev => {
      const newArray = prev.slice();
      newArray.splice(index, 1);
      return newArray.length === 0 ? [getEmptyNote(0)] : newArray;
    });
  }

  return (
    <section className='note-board'>
      <div className='container px-3'>
        <div className="columns is-multiline is-centered is-vcentered px-6">

          {notes.map((n, index) => (
            <div key={n.id} className="note-column column is-one-third is-flex is-justify-content-space-around">

              {index % 3 !== 0 ? null : (
                <button
                  className={"add-button add-button-left" + (index === 0 ? " add-button-first" : '')}
                  onClick={(e) => { handleAddNote(e, index) }}
                >
                  <AddIcon />
                </button>
              )}

              <Note
                id={n.id}
                title={n.title}
                content={n.content}
                color={n.color}
                onChange={handleNoteChange}
              />

              <button
                className="delete-button"
                onClick={(e) => { handleDeleteNote(e, index) }}
              >
                <DeleteIcon />
              </button>

              <button
                className="add-button add-button-right"
                onClick={(e) => { handleAddNote(e, index + 1) }}
              >
                <AddIcon />
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default NoteBoard;