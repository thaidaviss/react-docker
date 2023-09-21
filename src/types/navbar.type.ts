import { MenuProps } from 'antd';

export interface INavbar {
  key: string;
  label: React.ReactNode;
  menu?: MenuProps['items'];
}
