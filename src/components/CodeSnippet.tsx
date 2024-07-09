import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Box } from "@mui/material";

interface CodeSnippetProps {
  language?: string;
  code: string;
}

function CodeSnippet({ language = "text", code }: CodeSnippetProps) {
  return (
    <Box sx={{ width: "70%", height: "auto", margin: "12px" }}>
      <span style={{ fontSize: "18px", width: "100%" }}>
        <SyntaxHighlighter
          language={language}
          style={nightOwl}
          wrapLines
          showLineNumbers
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </span>
    </Box>
  );
}

export default CodeSnippet;
