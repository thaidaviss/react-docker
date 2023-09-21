import { LogoIcon } from '@assets/index';
import { MENU_HEADER } from '@constants/menuHeader';
import { SITE_MAP } from '@constants/siteMap';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import Search from '../Search';

function HeaderTop() {
  return (
    <Row justify="space-between" align="middle" className="header__section">
      <Col>
        <div className="header__logo">
          <Link to={SITE_MAP.HOME.path}>
            <LogoIcon />
          </Link>
        </div>
      </Col>
      <Col>
        <div className="header__search">
          <Search />
        </div>
      </Col>
      <Col>
        <ul className="header__menu flex">
          {MENU_HEADER.map((menuItem) => (
            <li className="header__menu-item" key={menuItem.id}>
              <Link to={menuItem.link}>
                <span className="icon">{menuItem.icon}</span>
                <span className="label">{menuItem.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}

export default HeaderTop;
