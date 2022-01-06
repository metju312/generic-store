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
      sidePaddings?: number
      text?: Text
      heading?: Text
      palette?: ColorPalette
    },
    footer?: {
      background?: string
      sidePaddings?: number
      height?: number
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
  fontSize?: number
  fontWeight?: number
}

interface ColorPalette {
  light?: string
  primary?: string
  dark?: string
}