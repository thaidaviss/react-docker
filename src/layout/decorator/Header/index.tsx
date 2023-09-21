import HeaderBottom from './components/HeaderBottom';
import HeaderTop from './components/HeaderTop';
import { HeaderContainer } from './styles';

function Header() {
  return (
    <HeaderContainer className="header">
      <HeaderTop />
      <HeaderBottom />
    </HeaderContainer>
  );
}

export default Header;
