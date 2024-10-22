import { createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

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
    projectOrganization: React.CSSProperties;
    codeTitle: React.CSSProperties;
    largeImageDescription: React.CSSProperties;
    h1Mobile: React.CSSProperties;
    h2Mobile: React.CSSProperties;
    descriptionMobile: React.CSSProperties;
    body1Mobile: React.CSSProperties;
    cardHeaderMobile: React.CSSProperties;
    cardSubheaderMobile: React.CSSProperties;
    cardBodyMobile: React.CSSProperties;
    cardTagMobile: React.CSSProperties;
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
    projectOrganization?: React.CSSProperties;
    codeTitle?: React.CSSProperties;
    largeImageDescription?: React.CSSProperties;
    h1Mobile?: React.CSSProperties;
    h2Mobile?: React.CSSProperties;
    descriptionMobile?: React.CSSProperties;
    body1Mobile?: React.CSSProperties;
    cardHeaderMobile?: React.CSSProperties;
    cardSubheaderMobile?: React.CSSProperties;
    cardBodyMobile?: React.CSSProperties;
    cardTagMobile?: React.CSSProperties;
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
    projectOrganization: true;
    codeTitle: true;
    largeImageDescription: true;
    h1Mobile: true;
    h2Mobile: true;
    descriptionMobile: true;
    body1Mobile: true;
    cardHeaderMobile: true;
    cardSubheaderMobile: true;
    cardBodyMobile: true;
    cardTagMobile: true;
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
  projectOrganization: {
    fontFamily: "Cormorant Garamond",
    fontSize: "24px",
    fontWeight: 400,
    letterSpacing: "1px",
    textAlign: "left",
    textIndent: "0px",
  },
  codeTitle: {
    fontFamily: "monospace",
    fontSize: "18px",
    textIndent: "0px",
  },
  largeImageDescription: {
    fontFamily: "Cormorant Garamond",
    fontSize: "18px",
    textIndent: "0px",
    fontWeight: 400,
    textAlign: "center",
  },
  h1Mobile: {
    fontFamily: "Meqanor",
    fontSize: "36px",
    textAlign: "center",
    textIndent: "0px",
  },
  h2Mobile: {
    fontFamily: "Meqanor",
    fontSize: "22px",
    textAlign: "center",
    textIndent: "0px",
  },
  descriptionMobile: {
    fontFamily: "Cormorant Garamond",
    fontSize: "20px",
    fontWeight: 400,
    textAlign: "center",
    textIndent: "0px",
  },
  body1Mobile: {
    fontFamily: "Cormorant Garamond",
    fontSize: "20px",
    fontWeight: 400,
    textAlign: "justify",
    textIndent: "24px",
  },
  cardHeaderMobile: {
    fontFamily: "Meqanor",
    fontSize: "32px",
  },
  cardSubheaderMobile: {
    fontFamily: "Cormorant Garamond",
    fontSize: "18px",
    fontWeight: 700,
    letterSpacing: "4px",
  },
  cardBodyMobile: {
    fontFamily: "Cormorant Garamond",
    fontSize: "22px",
    fontWeight: 400,
  },
  cardTagMobile: {
    fontFamily: "Cormorant Garamond",
    fontSize: "14px",
    fontWeight: 400,
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
  projectDescription: "h5",
  projectTag: "p",
  projectP: "p",
  projectSubheader: "h2",
  projectOrganization: "h4",
  codeTitle: "h6",
  largeImageDescription: "p",
  h1Mobile: "h1",
  descriptionMobile: "p",
  body1Mobile: "p",
  cardHeaderMobile: "h1",
  cardSubheaderMobile: "h2",
  cardBodyMobile: "p",
  cardTagMobile: "p",
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
      light: "#3d3042",
    },
    secondary: {
      main: "#c993db",
      light: "#282c34",
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
      light: "#e0bdeb",
    },
    secondary: {
      main: "#ba64d7",
      light: "#fafafa",
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
