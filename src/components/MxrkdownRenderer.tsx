import { mxrkdownElement } from "../utility/types";

interface MxrkdownRendererProps {
  elements: mxrkdownElement[];
}

function MxrkdownRenderer({ elements }: MxrkdownRendererProps) {
  return (
    <div>
      {elements.map((element, index) => {
        switch (element.type) {
          case "paragraph":
            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: element.content }}
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
    </div>
  );
}

export default MxrkdownRenderer;
