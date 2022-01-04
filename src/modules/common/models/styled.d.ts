import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    topBar?: {
      background?: string
      height?: number
      sidePaddings?: number
      text?: Text
    },
    content?: {
      background?: string
      padding?: string
      text?: Text
      heading?: Text
    },
    footer?: {
      background?: string
      padding?: string,
      text?: Text
    },
    card?: {
      borderColor?: string
    }
  }
}


interface Text {
  color?: string
  fontFamily?: string
  fontSize?: string
}