import { Typography } from "@mui/material";
import {
  StyledCardGrid,
  StyledDates,
  StyledDescription,
  StyledDot,
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
        <StyledTitle variant="cardHeader">{props.title}</StyledTitle>
        <StyledDates variant="cardH2">{props.dates}</StyledDates>
        <StyledDescription variant="cardP">
          {props.description}
        </StyledDescription>
        <StyledTagsBox>
          {props.tags.map((tag, index) => (
            <StyledTag key={index}>
              <StyledDot />
              <Typography variant="cardTag">{tag}</Typography>
            </StyledTag>
          ))}
        </StyledTagsBox>
      </StyledPortfolioCard>
    </StyledCardGrid>
  );
}

export default PortfolioCard;
