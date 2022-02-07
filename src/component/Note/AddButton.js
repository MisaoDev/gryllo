import AddIcon from '@mui/icons-material/Add';
import './Buttons.scss';

function AddButton(props) {
  const {position, isLeft, isFirst} = props;

  function handleClick() {
    props.onAddNote(position);
  }

  const classList = [
    'add-button',
    isLeft  ? 'add-button-left' : 'add-button-right',
    isFirst ? 'add-button-first' : null
  ].join(' ');

  return (
    <button
      className={classList}
      onClick={handleClick}
    >
      <AddIcon />
    </button>
  )
};

export default AddButton;