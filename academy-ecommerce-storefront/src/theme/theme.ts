import { DefaultTheme } from 'styled-components';


// create a new object if you want a different theme
const dark: DefaultTheme = {
  
    primary: "#000",
    secondary: "#fff",
    bordercolor:"#fff",
};

const light: DefaultTheme = {
  
    primary: "#fff",
    secondary: "#000",
    bordercolor:"#000",
};

export { dark, light };