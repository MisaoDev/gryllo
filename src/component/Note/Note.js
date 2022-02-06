import { useRef, useState } from 'react';
import './Note.scss';

function Note(props) {
  const { id, title, content, color } = props;

  const noteStyle = {
    width: '400px',
    backgroundColor: color || '#8AF9FF',
  }

  function handleChange(event) {
    const { name, value } = event.target;
    props.onChange(
      id,
      { [name]: value }
    );
  }

  return (
    <div className="note" style={noteStyle}>
      <input
        type="text"
        className="note-title input"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        type="text"
        className="note-content input"
        name="content"
        value={content}
        onChange={handleChange}
      />
    </div>
  );
}

export default Note;