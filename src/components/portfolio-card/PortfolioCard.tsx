import {
  StyledCardGrid,
  StyledDates,
  StyledDescription,
  StyledPortfolioCard,
  StyledTag,
  StyledTagsBox,
  StyledTitle,
} from "../../styles/PortfolioCard";
import { useNavigate } from "react-router-dom";

interface PortfolioCardProps {
  title: string;
  dates: string;
  description: string;
  tags: string[];
  navTo: string;
}

function PortfolioCard(props: PortfolioCardProps) {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <StyledCardGrid
      item
      md={6}
      onClick={() => {
        routeChange(props.navTo);
      }}
    >
      <StyledPortfolioCard>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledDates>{props.dates}</StyledDates>
        <StyledDescription>{props.description}</StyledDescription>
        <StyledTagsBox>
          {props.tags.map((tag, index) => (
            <StyledTag key={index}>{tag}</StyledTag>
          ))}
        </StyledTagsBox>
      </StyledPortfolioCard>
    </StyledCardGrid>
  );
}

export default PortfolioCard;
