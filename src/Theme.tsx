import { PaletteMode } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                text: {
                    primary: "#1e1e1e",
                    secondary: "#4e4e4e",
                },
                primary: {
                    main: "#f1f5ff",
                    1: "#d7dff3",
                    2: "#c2cce5",
                },
                secondary: {
                    1: "#2937ca",
                    2: "#5b44d0",
                    3: "#ac49ab",
                    4: "#ff5f94",
                    5: "#ff848e",
                },
            }
            : {
                text: {
                    primary: "#fff",
                    secondary: "#bbbbbb",
                },
                primary: {
                    main: "#141823",
                    1: "#1b2132",
                    2: "#212b44",
                },
                secondary: {
                    1: "#4a58f2",
                    2: "#8c75ff",
                    3: "#e062de",
                    4: "#ff76a4",
                    5: "#ff939c",
                },
            })
    },
});