import { createTheme, SimplePaletteColorOptions } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface PaletteColorOptions
    extends SimplePaletteColorOptions,
      ColorPartial {
    1?: string;
  }

  interface PaletteColor extends ColorPartial {
    1?: string;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    cardHeader: React.CSSProperties;
    cardSubheader: React.CSSProperties;
    cardBody: React.CSSProperties;
    cardTag: React.CSSProperties;
    navbarLabel: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    cardHeader?: React.CSSProperties;
    cardSubheader?: React.CSSProperties;
    cardBody?: React.CSSProperties;
    cardTag?: React.CSSProperties;
    navbarLabel?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    cardHeader: true;
    cardSubheader: true;
    cardBody: true;
    cardTag: true;
    navbarLabel: true;
  }
}

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const typography: TypographyOptions = {
  h1: {
    fontFamily: "Meqanor",
    fontSize: "64px",
    textAlign: "left",
  },
  h2: {
    fontFamily: "Meqanor",
    fontSize: "40px",
    textAlign: "left",
  },
  body1: {
    fontFamily: "Cormorant Garamond",
    fontSize: "24px",
    fontWeight: 400,
    textAlign: "justify",
  },
  cardHeader: {
    fontFamily: "Meqanor",
    fontSize: "32px",
  },
  cardSubheader: {
    fontFamily: "Cormorant Garamond",
    fontSize: "18px",
    fontWeight: 700,
    // TODO: letter spacing
  },
  cardBody: {
    fontFamily: "Cormorant Garamond",
    fontSize: "22px",
    fontWeight: 400,
    // TODO: line spacing?
  },
  cardTag: {
    fontFamily: "Cormorant Garamond",
    fontSize: "14px",
    fontWeight: 400,
  },
  navbarLabel: {
    fontFamily: "Cormorant Garamond",
    fontSize: "22px",
    fontWeight: 400,
  },
};

const variantMapping = {
  cardHeader: "h1",
  cardSubheader: "h2",
  cardBody: "p",
  cardTag: "p",
  navbarLabel: "p",
};

export const darkTheme = createTheme({
  palette: {
    text: {
      primary: "#fcf4ff",
    },
    background: {
      default: "#232024",
    },
    primary: {
      main: "#322a35",
      1: "#3d3042",
    },
    secondary: {
      main: "#c993db",
    },
  },
  breakpoints: {
    values: { ...breakpoints },
    unit: "px",
  },
  typography: typography,
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: variantMapping,
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    text: {
      primary: "#232024",
    },
    background: {
      default: "#fcf4ff",
    },
    primary: {
      main: "#efdcf5",
      1: "#e0bdeb",
    },
    secondary: {
      main: "#ba64d7",
    },
  },
  breakpoints: {
    values: { ...breakpoints },
    unit: "px",
  },
  typography: typography,
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: variantMapping,
      },
    },
  },
});
