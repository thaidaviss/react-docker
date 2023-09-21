import { THEME } from '@constants/theme';
import styled from 'styled-components/macro';

export const HeaderContainer = styled.div`
  font-size: ${THEME.FONT_SIZE.MD} !important;
  .header__section {
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 0;
  }
  .header__menu {
    align-items: center;
    &-item {
      margin: 10px;
    }
    .icon {
      margin-right: 5px;
    }
    .icon svg {
      width: 24px;
      position: relative;
      top: 5px;
    }
    .label {
      font-size: ${THEME.FONT_SIZE.MD};
      color: ${THEME.COLOR.TEXT_BODY};
    }
  }
`;
