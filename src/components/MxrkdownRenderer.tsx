import { mxrkdownElement } from "../utility/types";
import { Box, Typography } from "@mui/material";
import { InlineLink, ItalicText } from "./StyledComponents";

interface MxrkdownRendererProps {
  elements: mxrkdownElement[];
}

function MxrkdownRenderer({ elements }: MxrkdownRendererProps) {
  return (
    <Box>
      {elements.map((element, index) => {
        switch (element.type) {
          case "paragraph":
            const parsedContent = element.content.map((content, index) => {
              console.log("content: ", content);
              switch (content.type) {
                case "text":
                  return <span key={index}>{content.content}</span>;
                case "link":
                  return (
                    <InlineLink key={index} href={content.url}>
                      {content.text}
                    </InlineLink>
                  );
                case "italic":
                  return <ItalicText key={index}>{content.content}</ItalicText>;
                case "bold":
                  return <strong key={index}>{content.content}</strong>;
                default:
                  return null;
              }
            });
            console.log("parsed content: ", parsedContent);
            return (
              <Typography
                key={index}
                dangerouslySetInnerHTML={{ __html: parsedContent }}
                variant="body1"
              />
            );
          case "coverImage":
            return <img key={index} src={element.url} alt="Cover" />;
          case "inParagraphImage":
            return <img key={index} src={element.url} alt="In Paragraph" />;
          case "screenshot":
            return <img key={index} src={element.url} alt="Screenshot" />;
          case "readmeLink":
            return (
              <a key={index} href={element.url}>
                Readme
              </a>
            );
          case "award":
            return (
              <div key={index}>
                <strong>Award:</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: element.content }} />
              </div>
            );
          case "featureImplemented":
            return (
              <div key={index}>
                <strong>Feature Implemented:</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: element.content }} />
                {element.subpoints &&
                  element.subpoints.map((subpoint, subIndex) => (
                    <div
                      key={subIndex}
                      style={{ marginLeft: "20px" }}
                      dangerouslySetInnerHTML={{ __html: subpoint }}
                    />
                  ))}
              </div>
            );
          case "featureToImplement":
            return (
              <div key={index}>
                <strong>Feature to Implement:</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: element.content }} />
              </div>
            );
          case "media":
            return (
              <div key={index}>
                <strong>Media:</strong>{" "}
                <span dangerouslySetInnerHTML={{ __html: element.content }} />
              </div>
            );
          case "githubLink":
            return (
              <a key={index} href={element.url}>
                GitHub Repository
              </a>
            );
          default:
            return null;
        }
      })}
    </Box>
  );
}

export default MxrkdownRenderer;
