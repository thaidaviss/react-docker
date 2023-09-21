import { FontFamilyEnum } from '@constants/fontEnum';
import { ConfigProvider, ThemeConfig } from 'antd';
import './App.css';
import { THEME } from './constants';
import Router from './router';

const configAntd: ThemeConfig = {
  token: {
    colorPrimary: THEME.COLOR.SUCCESS,
    fontFamily: FontFamilyEnum.Quicksand,
  },
};
function App() {
  return (
    <ConfigProvider theme={configAntd}>
      <Router />
      {/* <Button type={'primary'}>Button default</Button>
      <Button type={'outline'}>Button hover</Button>
      <Button type={'shadow'}>Button Outline</Button>
      <Button type="primary" border="rounder">
        Button Rounder
      </Button>
      <Loading /> */}
      {/* <Heading level="heading_1">A</Heading>
      <Heading level="display_2">A</Heading> */}
    </ConfigProvider>
  );
}

export default App;
