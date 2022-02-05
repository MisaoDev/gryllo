import { useRef } from 'react';
import './Note.scss';

function Note(props) {
  const {id} = props;
  const defaultText = {
    title  : props.title   || 'title',
    content: props.content || 'content',
  };

  const editableRef = {
    title: useRef('New note'),
    content: useRef(''),
  }

  function handleInput(event) {
    const name = event.target.getAttribute('name');
    const value = event.target.textContent;
    props.onChange(id, {[name]: value});

    // editableRef[name].current.textContent = value;
  }

  const noteStyle = {
    width: 400,
  }

  return (
    <div className="note card has-background-info" style={noteStyle}>
      <header className="">
        <p
          className="card-header-title"
          contentEditable
          suppressContentEditableWarning={true}
          name="title"
          ref={editableRef.title}
          onInput={handleInput}
        >
          {defaultText.title}
        </p>
      </header>
      <div className="card-content">
        <div
          className="content"
          contentEditable
          suppressContentEditableWarning={true}
          name="content"
          ref={editableRef.content}
          onInput={handleInput}
        >
          {defaultText.content}
        </div>
      </div>
    </div>
  );
};
export default Note;