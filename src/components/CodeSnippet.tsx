import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface CodeSnippetProps {
  language?: string;
  code: string;
  darkMode: boolean;
  title?: string;
}

// TODO: add language icon next to title

function CodeSnippet({
  language = "text",
  code,
  darkMode,
  title,
}: CodeSnippetProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 4,
        mb: 4,
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "70%",
          height: "auto",
          padding: "12px",
          border: `2px solid ${theme.palette.text.primary}`,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            padding: "12px",
            paddingRight: "24px",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: theme.palette.secondary.light,
          }}
        >
          <Typography variant="codeTitle" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Divider
            sx={{
              backgroundColor: theme.palette.text.primary,
              width: "50%",
              height: "2px",
              mb: 2,
            }}
          />
          <span style={{ fontSize: "16px", width: "100%" }}>
            <SyntaxHighlighter
              language={language}
              style={darkMode ? atomOneDark : atomOneLight}
              wrapLines
              showLineNumbers
              wrapLongLines
            >
              {code}
            </SyntaxHighlighter>
          </span>
        </Box>
      </Box>
    </Box>
  );
}

export default CodeSnippet;
