import logo from '../logo.svg';
import './Brand.css';

function Brand(props) {
  const { burgerActive, onBurgerChange } = props;

  const burgerClassName = 'navbar-burger' + (burgerActive ? ' is-active' : '');

  function Burger() {
    console.log(burgerActive);
    console.log(onBurgerChange);
    return (
      <button
        className={burgerClassName}
        aria-label="menu"
        aria-expanded="false"
        data-target="navBarMenu"
        onClick={onBurgerChange}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    );
  }

  return (
    <div className="navbar-brand" >
      <a href="/#" className="navbar-item">
        <div className="is-flex">
          <img src={logo} alt="logo" className="logo-img" />
          <span className='is-size-4 logo-text'>Gryllo</span>
        </div>
      </a>
      <Burger />
    </div >
  );
}
export default Brand;