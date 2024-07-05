import { mxrkdownElement } from "./types";

export function parseMxrkdown(content: string): mxrkdownElement[] {
  const lines = content.split("\n");
  const elements: mxrkdownElement[] = [];

  console.log("starting parse...");

  lines.forEach((line) => {
    console.log("parsing line: " + line);
    if (line.startsWith("p|")) {
      console.log("paragraph line: " + line);
      elements.push({
        type: "paragraph",
        content: parseInlineStyles(line.slice(2).trim()),
      });
    } else if (line.startsWith("i|")) {
      elements.push({ type: "coverImage", url: line.slice(2).trim() });
    } else if (line.startsWith("ii|")) {
      elements.push({ type: "inParagraphImage", url: line.slice(3).trim() });
    } else if (line.startsWith("s|")) {
      elements.push({ type: "screenshot", url: line.slice(2).trim() });
    } else if (line.startsWith("r|")) {
      elements.push({ type: "readmeLink", url: line.slice(2).trim() });
    } else if (line.startsWith("a|")) {
      elements.push({
        type: "award",
        content: parseInlineStyles(line.slice(2).trim()),
      });
    } else if (line.startsWith("f|")) {
      elements.push({
        type: "featureImplemented",
        content: parseInlineStyles(line.slice(2).trim()),
      });
    } else if (line.startsWith("ff|")) {
      const lastElement = elements[elements.length - 1];
      if (lastElement && lastElement.type === "featureImplemented") {
        if (!lastElement.subpoints) {
          lastElement.subpoints = [];
        }
        lastElement.subpoints.push(parseInlineStyles(line.slice(3).trim()));
      }
    } else if (line.startsWith("fi|")) {
      elements.push({
        type: "featureToImplement",
        content: parseInlineStyles(line.slice(3).trim()),
      });
    } else if (line.startsWith("m|")) {
      elements.push({
        type: "media",
        content: parseInlineStyles(line.slice(2).trim()),
      });
    } else if (line.startsWith("g|")) {
      elements.push({ type: "githubLink", url: line.slice(2).trim() });
    }
  });

  console.log("completed parse");
  return elements;
}

function parseInlineStyles(content: string): string {
  return content
    .replace(/\[\[(.*?)\s(.*?)\]\]/g, '<a href="$1" target="_blank">$2</a>') // inline links
    .replace(/\/\/(.*?)\/\//g, "<em>$1</em>") // italicized text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // bold text
}
