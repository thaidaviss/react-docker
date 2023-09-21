import {
  DISPLAY_1,
  DISPLAY_2,
  HEADING_1,
  HEADING_2,
  HEADING_3,
  HEADING_4,
  HEADING_5,
  HEADING_6,
} from '@style/common';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type TLevel =
  | 'heading_6'
  | 'heading_5'
  | 'heading_4'
  | 'heading_3'
  | 'heading_2'
  | 'heading_1'
  | 'display_2'
  | 'display_1';
interface IProps extends PropsWithChildren {
  level: TLevel;
}
const styleConfig = {
  heading_6: HEADING_6,
  heading_5: HEADING_5,
  heading_4: HEADING_4,
  heading_3: HEADING_3,
  heading_2: HEADING_2,
  heading_1: HEADING_1,
  display_2: DISPLAY_2,
  display_1: DISPLAY_1,
};
function Heading({ level = 'heading_5', ...props }: IProps) {
  return <HeadingStyle level={level}>{props.children}</HeadingStyle>;
}

export default Heading;
const HeadingStyle = styled.div<{ level: TLevel }>`
  ${(props) => styleConfig[props.level]}
`;
