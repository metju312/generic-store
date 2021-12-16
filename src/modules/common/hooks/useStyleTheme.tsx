import {useContext} from "react";
import StyleThemeContext from "../context/StyleThemeContext";

const useStyleTheme = () => {
  return useContext(StyleThemeContext);
};

export default useStyleTheme;
