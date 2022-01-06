import {DefaultTheme} from "styled-components";

const styleThemeConfig: DefaultTheme = {
  topBar: {
    background: '#ffffff',
    height: 116,
    sidePaddings: 64,
    text: {
      color: '#2d333a',
      fontFamily: 'Mulish'
    }
  },
  content: {
    background: '#ffffff',
    padding: '32px 64px'
  },
  footer: {
    background: '#1b1f23',
    height: 100,
    text: {
      color: '#ffffff',
    }
  },
  card: {
    borderColor: '#ebebeb'
  }
};

export default styleThemeConfig;