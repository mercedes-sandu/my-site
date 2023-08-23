import { createTheme, SimplePaletteColorOptions } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
    interface PaletteColorOptions extends SimplePaletteColorOptions, ColorPartial {
        1?: string;
        2?: string;
        3?: string;
        4?: string;
    }

    interface PaletteColor extends ColorPartial {
        1?: string;
        2?: string;
        3?: string;
        4?: string;
    }
};

const breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
};

export const darkTheme = createTheme({
    palette: {
        text: {
            primary: "#fff",
            secondary: "#bbbbbb",
        },
        background: {
            default: "#141823",
        },
        primary: {
            main: "#141823",
            1: "#1b2132",
            2: "#212b44",
        },
        secondary: {
            main: "#4a58f2",
            1: "#8c75ff",
            2: "#e062de",
            3: "#ff76a4",
            4: "#ff939c",
        },
    },
    breakpoints: {
        values: { ...breakpoints },
        unit: "px",
    },
});

export const lightTheme = createTheme({
    palette: {
        text: {
            primary: "#1e1e1e",
            secondary: "#4e4e4e",
        },
        background: {
            default: "#f1f5ff",
        },
        primary: {
            main: "#f1f5ff",
            1: "#d7dff3",
            2: "#c2cce5",
        },
        secondary: {
            main: "#2937ca",
            1: "#5b44d0",
            2: "#ac49ab",
            3: "#ff5f94",
            4: "#ff848e",
        },
    },
    breakpoints: {
        values: { ...breakpoints },
        unit: "px",
    },
});