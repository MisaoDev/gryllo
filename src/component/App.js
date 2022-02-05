// import logo from './logo.svg';
// import 'bulma/css/bulma.css';
import './App.scss';
import NavBar from './NavBar/NavBar';
import Footer from './Footer';
import NoteBoard from './Note/NoteBoard';

function App() {
  return (
    <div className="App is-flex is-flex-direction-column">
      <NavBar />
      <NoteBoard />
      <Footer />
    </div>
  );
}

export default App;
