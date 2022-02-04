import './Menu.css';

function Menu(props) {
  const { burgerActive } = props;

  const menuClassName = 'navbar-menu' + (burgerActive ? ' is-active' : '');

  return (
    <div className={menuClassName} id="navBarMenu">
      {/* Menu */}
      <div className="navbar-start">
      </div>

      {/* Sign up/in buttons */}
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons is-justify-content-flex-end">
            <a href="/#" className="button is-small is-info sign-up-button">
              <strong>Sign up</strong>
            </a>
            <a href="/#" className="button is-small is-light is-outlined" id="nav-login-button">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;