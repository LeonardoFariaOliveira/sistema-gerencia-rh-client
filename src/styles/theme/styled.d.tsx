import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {

        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            stroke: string;
            bg: string;
        },

        text: {
            primary: string,
            secondary: string,
            tertiary: string;
        },

    }
}