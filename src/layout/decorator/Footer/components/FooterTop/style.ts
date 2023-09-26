import { THEME } from '@constants/theme';
import { Row } from 'antd';
import styled from 'styled-components';

export const FooterTopStyle = styled(Row)`
  color: ${THEME.COLOR.TEXT_PRIMARY};
  .logo {
    display: block;
    margin-bottom: 12px;
  }
  .footer-top__info {
    text-align: left;
    width: 30%;
    margin-right: 20px;
  }
  .footer-top__menu {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
  .info__item {
    display: flex;
    justify-content: left;
    margin-bottom: 12px;
    max-width: 100%;
    &-icon {
      margin-right: 7px;
    }
    &-label {
      ${THEME.STYLES.TEXT_SMALL}
      b {
        ${THEME.STYLES.HEADING_6}
      }
    }
  }
  .menu__item {
    text-align: left;
    &-label {
      padding-bottom: 12px;
    }
    &-item {
      margin-bottom: 6px;
    }
  }
`;
