import {createContext} from "react";
import { DefaultTheme } from 'styled-components';

const StyleThemeContext = createContext<DefaultTheme>({} as DefaultTheme);

export default StyleThemeContext;
