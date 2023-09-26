import { DownOutlined } from '@ant-design/icons';
import { AppsIcon, HeadsetIcon } from '@assets/index';
import Button from '@components/Button';
import Heading from '@components/Heading';
import Navbar from '@components/Navbar';
import { THEME } from '@constants/theme';
import {
  Dropdown, MenuProps, Row, Space,
} from 'antd';
import styled from 'styled-components';

// TODO: change item menu
const items: MenuProps['items'] = [
  {
    key: '1',
    label: '1st menu item',
  },
];

function HeaderBottom() {
  return (
    <HeaderBottomStyle justify="space-between" className="header__section">
      <Space>
        <Dropdown menu={{ items }} trigger={['click']}>
          <Button type="primary">
            <Space align="center">
              <span className="header__section__icon">
                <AppsIcon />
              </span>
              Browse All Categories
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <div className="header__section--nav">
          <Navbar />
        </div>
      </Space>
      <div className="header_section--phone">
        <div className="icon">
          <HeadsetIcon />
        </div>
        <div>
          <Heading level="heading_4" className="number">
            1900-8888
          </Heading>
          <span>24/7 Support Center</span>
        </div>
      </div>
    </HeaderBottomStyle>
  );
}

export default HeaderBottom;
const HeaderBottomStyle = styled(Row)`
  .header__section__icon {
    position: relative;
    top: 3px;
  }
  .header_section--phone {
    display: flex;
  }
  .number {
    color: ${THEME.COLOR.SUCCESS};
  }
  .icon {
    position: relative;
    top: 7px;
    left: -10px;
  }
`;
