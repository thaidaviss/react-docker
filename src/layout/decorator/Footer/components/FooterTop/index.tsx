import { LogoIcon } from '@assets/index';
import Heading from '@components/Heading';
import Text from '@components/Text';
import { MENU_FOOTER } from '@constants/footer';
import { Col } from 'antd';
import { FooterTopStyle } from './style';

function FooterTop() {
  return (
    <FooterTopStyle className="footer-top">
      <Col className="footer-top__info">
        <span className="logo">
          <LogoIcon />
        </span>
        {MENU_FOOTER.info.map((infoItem) => (
          <div className="info__item" key={infoItem.value}>
            <span className="info__item-icon">{infoItem.icon}</span>
            <span className="info__item-label">
              <b>
                {infoItem.label}
                :
                {' '}
              </b>
              <span>{infoItem.value}</span>
            </span>
          </div>
        ))}
      </Col>
      <Col className="footer-top__menu">
        {MENU_FOOTER.menu.map((menuItem) => (
          <div className="menu__item" key={menuItem.value}>
            <Heading level="heading_5" className="menu__item-label">
              {menuItem.label}
            </Heading>
            {menuItem.children.map((childItem) => (
              <div className="menu__item" key={childItem.value}>
                <Text size="medium" className="menu__item-item">
                  {childItem.label}
                </Text>
              </div>
            ))}
          </div>
        ))}
      </Col>
    </FooterTopStyle>
  );
}

export default FooterTop;
