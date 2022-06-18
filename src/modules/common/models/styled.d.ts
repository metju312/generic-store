import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    topBar?: {
      background?: string
      height?: number
      sidePaddings?: number
      text?: Text
    },
    breadcrumbsBar?: {
      background?: string
      sidePaddings?: number
      height?: number
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
    },
    textStyles?: {
      display2xlNormal?: Text
      display2xlMedium?: Text
      display2xlSemiBold?: Text
      display2xlBold?: Text

      displayXlNormal?: Text
      displayXlMedium?: Text
      displayXlSemiBold?: Text
      displayXlBold?: Text

      displayLgNormal?: Text
      displayLgMedium?: Text
      displayLgSemiBold?: Text
      displayLgBold?: Text

      displayMdNormal?: Text
      displayMdMedium?: Text
      displayMdSemiBold?: Text
      displayMdBold?: Text

      displaySmNormal?: Text
      displaySmMedium?: Text
      displaySmSemiBold?: Text
      displaySmBold?: Text

      displayXsNormal?: Text
      displayXsMedium?: Text
      displayXsSemiBold?: Text
      displayXsBold?: Text2

      textXlNormal?: Text
      textXlMedium?: Text
      textXlSemiBold?: Text
      textXlBold?: Text

      textLgNormal?: Text
      textLgMedium?: Text
      textLgSemiBold?: Text
      textLgBold?: Text

      textMdNormal?: Text
      textMdMedium?: Text
      textMdSemiBold?: Text
      textMdBold?: Text

      textSmNormal?: Text
      textSmMedium?: Text
      textSmSemiBold?: Text
      textSmBold?: Text

      textXsNormal?: Text
      textXsMedium?: Text
      textXsSemiBold?: Text
      textXsBold?: Text
    },
  }
}


interface Text {
  color?: string
  fontFamily?: string
  fontSize?: string
  fontWeight?: number
}

interface ColorPalette {
  light?: string
  primary?: string
  dark?: string
}
