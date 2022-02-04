import { useState } from 'react';
import Brand from './Brand';
import Menu from './Menu';

function NavBar(props) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  function toggleBurger() {
    setIsBurgerActive(state => !state);
  }

  return (
    <nav className="navbar is-primary">
      <div className="container is-max-desktop">
        <Brand burgerActive={isBurgerActive} onBurgerChange={toggleBurger} />
        <Menu burgerActive={isBurgerActive} />
      </div>
    </nav>
  );
}

export default NavBar;