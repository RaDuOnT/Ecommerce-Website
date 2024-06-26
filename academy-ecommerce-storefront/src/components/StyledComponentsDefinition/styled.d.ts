// import original module declarations
import 'styled-components';

// and extend them!

// add a new field to the interface if you want a new property
declare module 'styled-components' {
  export interface DefaultTheme {
  
        primary: string,
        secondary: string,
        bordercolor?:string,
        font?: string,
        fontweight?: string
    }

}
