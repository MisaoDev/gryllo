import DeleteIcon from '@mui/icons-material/Delete';
import './Buttons.scss';

function DeleteButton(props) {
  const {noteIndex, onDeleteNote} = props;

  function handleClick() {
    onDeleteNote(noteIndex);
  }

  return (
    <button
      className="delete-button"
      onClick={handleClick}
    >
      <DeleteIcon />
    </button>
  );
};

export default DeleteButton;