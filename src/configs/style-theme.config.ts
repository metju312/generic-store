import {DefaultTheme} from "styled-components";

const styleThemeConfig: DefaultTheme = {
  topBar: {
    background: '#ffffff',
    height: 100,
    sidePaddings: 64,
    text: {
      color: '#2d333a',
      fontFamily: 'Mulish',
      fontSize: 12
    }
  },
  breadcrumbsBar: {
    background: '#F2F3F5;',
    height: 30,
    sidePaddings: 120,
    text: {
      color: '#121212',
      fontFamily: 'Mulish',
      fontSize: 12
    }
  },
  content: {
    background: '#ffffff',
    sidePaddings: 120,
    text: {
      color: '#2d333a',
      fontFamily: 'Mulish'
    },
    palette: {
      primary: '#00AA9A',
      dark: '#39625d',
      light: '#E3FFFB'
    }
  },
  footer: {
    background: '#1b1f23',
    height: 100,
    sidePaddings: 64,
    text: {
      color: '#ffffff',
    }
  },
  card: {
    borderColor: '#ebebeb'
  }
};

export default styleThemeConfig;
