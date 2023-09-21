import {
  TEXT_LARGE, TEXT_MEDIUM, TEXT_SMALL, TEXT_XS,
} from '@style/common';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TSize = 'large' | 'medium' | 'small' | 'xs';
interface IProps extends PropsWithChildren {
  size: TSize;
}
const styleConfig = {
  large: TEXT_LARGE,
  medium: TEXT_MEDIUM,
  small: TEXT_SMALL,
  xs: TEXT_XS,
};
function Text({ size = 'small', ...props }: IProps) {
  return <TextStyle size={size}>{props.children}</TextStyle>;
}

export default Text;
const TextStyle = styled.div<{ size: TSize }>`
  ${(props) => styleConfig[props.size]}
`;
