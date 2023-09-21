import { DownOutlined } from '@ant-design/icons';
import { AppsIcon } from '@assets/index';
import Button from '@components/Button';
import Navbar from '@components/Navbar';
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
    <HeaderBottomStyle justify="start" className="header__section">
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
    </HeaderBottomStyle>
  );
}

export default HeaderBottom;
const HeaderBottomStyle = styled(Row)`
  .header__section__icon {
    position: relative;
    top: 3px;
  }
`;
