import { styled } from 'styled-components/macro';
import { Button } from 'antd';
import { THEME } from '@constants/theme';

export const ButtonStyle = styled(Button)`
  background-color: ${THEME.COLOR.SUCCESS};
  color: ${THEME.COLOR.WHITE};
  border: none;
  margin: 3px 5px;
  transition: all 0.2s;
  &.ant-btn-primary {
    background-color: ${THEME.COLOR.SUCCESS} !important;
    color: ${THEME.COLOR.WHITE};
    border: none;
    &:hover {
      opacity: 0.8;
      /* background-color: ${THEME.COLOR.GREEN_1} !important; */
      span {
        color: ${THEME.COLOR.WHITE};
      }
    }
  }
  &.ant-btn-outline {
    background-color: ${THEME.COLOR.WHITE};
    color: ${THEME.COLOR.SUCCESS};
    border: 1px solid;
    &:hover {
      background-color: ${THEME.COLOR.SUCCESS}!important;
      span {
        color: ${THEME.COLOR.WHITE};
      }
    }
  }
  &.ant-btn-shadow {
  }
  &[border='rounder'] {
    border-radius: 20px;
  }
`;
