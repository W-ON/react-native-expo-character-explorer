import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      card: string;
      accent: string;
      text: string;
      highlight: string;
      error: string;
    };
    fonts: {
      regular: string;
      bold: string;
    };
  }
}
