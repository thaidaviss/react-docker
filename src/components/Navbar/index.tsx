import { NAVBAR_LIST } from '@constants/menuHeader';
import Heading from '@components/Heading';
import { NavbarContainer } from './style';

function Navbar() {
  return (
    <NavbarContainer>
      {NAVBAR_LIST.map((navbarItem) => (
        <li className="navbar__item" key={navbarItem.key}>
          <Heading level="heading_6">{navbarItem.label}</Heading>
        </li>
      ))}
    </NavbarContainer>
  );
}

export default Navbar;
