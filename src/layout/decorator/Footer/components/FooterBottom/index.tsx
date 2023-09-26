import Text from '@components/Text';
import { FontFamilyEnum } from '@constants/fontEnum';
import { Space } from 'antd';
import styled from 'styled-components/macro';

function FooterBottom() {
  return (
    <FooterBottomStyle>
      <Text size="medium" className="text">
        © 2023, NestMart
      </Text>
      <Text size="medium" className="text">
        Development by William. All rights reserved
      </Text>
    </FooterBottomStyle>
  );
}

export default FooterBottom;
const FooterBottomStyle = styled(Space)`
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid rgba(216, 241, 229, 1);
  padding-top: 40px;
  .text {
    font-family: ${FontFamilyEnum.Lato} !important;
    font-weight: 400;
  }
`;
