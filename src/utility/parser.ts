import { mxrkdownElement } from "./types";

export function parseMxrkdown(content: string): mxrkdownElement[] {
  const lines = content.split("\n");
  const elements: mxrkdownElement[] = [];

  lines.forEach((line) => {
    if (line.startsWith("p|")) {
      elements.push({
        type: "paragraph",
        content: parseInlineStyles(line.slice(2).trim()),
      });
    } 
    // else if (line.startsWith("i|")) {
    //   elements.push({ type: "coverImage", url: line.slice(2).trim() });
    // } else if (line.startsWith("ii|")) {
    //   elements.push({ type: "inParagraphImage", url: line.slice(3).trim() });
    // } else if (line.startsWith("s|")) {
    //   elements.push({ type: "screenshot", url: line.slice(2).trim() });
    // } else if (line.startsWith("r|")) {
    //   elements.push({ type: "readmeLink", url: line.slice(2).trim() });
    // } else if (line.startsWith("a|")) {
    //   elements.push({
    //     type: "award",
    //     content: parseInlineStyles(line.slice(2).trim()),
    //   });
    // } else if (line.startsWith("f|")) {
    //   elements.push({
    //     type: "featureImplemented",
    //     content: parseInlineStyles(line.slice(2).trim()),
    //   });
    // } else if (line.startsWith("ff|")) {
    //   const lastElement = elements[elements.length - 1];
    //   if (lastElement && lastElement.type === "featureImplemented") {
    //     if (!lastElement.subpoints) {
    //       lastElement.subpoints = [];
    //     }
    //     lastElement.subpoints.push(parseInlineStyles(line.slice(3).trim()));
    //   }
    // } else if (line.startsWith("fi|")) {
    //   elements.push({
    //     type: "featureToImplement",
    //     content: parseInlineStyles(line.slice(3).trim()),
    //   });
    // } else if (line.startsWith("m|")) {
    //   elements.push({
    //     type: "media",
    //     content: parseInlineStyles(line.slice(2).trim()),
    //   });
    // } else if (line.startsWith("g|")) {
    //   elements.push({ type: "githubLink", url: line.slice(2).trim() });
    // }
  });

  return elements;
}

function parseInlineStyles(content: string): any[] {
  // return content
  //   .replace(/\[\[(.*?)\s(.*?)\]\]/g, '<a href="$1" target="_blank">$2</a>') // inline links
  //   .replace(/\/\/\/(.*?)\/\/\//g, "<em>$1</em>") // italicized text
  //   .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // bold text

  const elements: any[] = [];
  const regex = /\[\[(.*?)\s(.*?)\]\]|\/\/\/(.*?)\/\/\/|\*\*(.*?)\*\*/g;
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      elements.push({
        type: "text",
        content: content.slice(lastIndex, match.index),
      });
    }
    if (match[1] && match[2]) {
      elements.push({ type: "link", url: match[1], text: match[2] });
    } else if (match[3]) {
      elements.push({ type: "italic", content: match[3] });
    } else if (match[4]) {
      elements.push({ type: "bold", content: match[4] });
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < content.length) {
    elements.push({ type: "text", content: content.slice(lastIndex) });
  }

  console.log("elements: ", elements);
  return elements;
}
