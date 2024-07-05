export type mxrkdownElement =
  | { type: "paragraph"; content: string }
  | { type: "coverImage"; url: string }
  | { type: "inParagraphImage"; url: string }
  | { type: "screenshot"; url: string }
  | { type: "readmeLink"; url: string }
  | { type: "award"; content: string }
  | { type: "featureImplemented"; content: string; subpoints?: string[] }
  | { type: "featureToImplement"; content: string }
  | { type: "media"; content: string }
  | { type: "githubLink"; url: string };
