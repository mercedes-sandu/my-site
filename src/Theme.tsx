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
    filterLabel: React.CSSProperties;
    projectTitle: React.CSSProperties;
    projectDates: React.CSSProperties;
    projectDescription: React.CSSProperties;
    projectTag: React.CSSProperties;
    projectP: React.CSSProperties;
    projectSubheader: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    cardHeader?: React.CSSProperties;
    cardSubheader?: React.CSSProperties;
    cardBody?: React.CSSProperties;
    cardTag?: React.CSSProperties;
    navbarLabel?: React.CSSProperties;
    filterLabel?: React.CSSProperties;
    projectTitle?: React.CSSProperties;
    projectDates?: React.CSSProperties;
    projectDescription?: React.CSSProperties;
    projectTag?: React.CSSProperties;
    projectP?: React.CSSProperties;
    projectSubheader?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    cardHeader: true;
    cardSubheader: true;
    cardBody: true;
    cardTag: true;
    navbarLabel: true;
    filterLabel: true;
    projectTitle: true;
    projectDates: true;
    projectDescription: true;
    projectTag: true;
    projectP: true;
    projectSubheader: true;
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
    textIndent: "0px",
  },
  h2: {
    fontFamily: "Meqanor",
    fontSize: "40px",
    textAlign: "left",
    textIndent: "0px",
  },
  body1: {
    fontFamily: "Cormorant Garamond",
    fontSize: "24px",
    fontWeight: 400,
    textAlign: "justify",
    textIndent: "24px",
  },
  cardHeader: {
    fontFamily: "Meqanor",
    fontSize: "32px",
  },
  cardSubheader: {
    fontFamily: "Cormorant Garamond",
    fontSize: "18px",
    fontWeight: 700,
    letterSpacing: "4px",
  },
  cardBody: {
    fontFamily: "Cormorant Garamond",
    fontSize: "22px",
    fontWeight: 400,
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
    textIndent: "0px",
  },
  filterLabel: {
    fontFamily: "Cormorant Garamond",
    fontSize: "18px",
    fontWeight: 400,
    textIndent: "0px",
  },
  projectTitle: {
    fontFamily: "Meqanor",
    fontSize: "64px",
    textAlign: "left",
    textIndent: "0px",
  },
  projectDates: {
    fontFamily: "Cormorant Garamond",
    fontSize: "24px",
    fontWeight: 700,
    letterSpacing: "8px",
    textAlign: "left",
    textIndent: "0px",
  },
  projectDescription: {
    fontFamily: "Cormorant Garamond",
    fontSize: "24px",
    fontWeight: 700,
    letterSpacing: "1px",
    textAlign: "left",
    textIndent: "0px",
  },
  projectTag: {
    fontFamily: "Cormorant Garamond",
    fontSize: "18px",
    fontWeight: 400,
    textIndent: "0px",
  },
  projectP: {
    fontFamily: "Cormorant Garamond",
    fontSize: "24px",
    fontWeight: 400,
    textAlign: "justify",
    textIndent: "24px",
  },
  projectSubheader: {
    fontFamily: "Meqanor",
    fontSize: "40px",
    fontWeight: 700,
    textAlign: "left",
    textIndent: "0px",
  },
};

const variantMapping = {
  cardHeader: "h1",
  cardSubheader: "h2",
  cardBody: "p",
  cardTag: "p",
  navbarLabel: "p",
  filterLabel: "p",
  projectTitle: "h1",
  projectDates: "h3",
  projectDescription: "h4",
  projectTag: "p",
  projectP: "p",
  projectSubheader: "h2",
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
