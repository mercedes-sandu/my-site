import { 
    StyledCardGrid,
    StyledDates,
    StyledDescription,
    StyledPortfolioCard,
    StyledTag,
    StyledTagsBox,
    StyledTitle
} from "../../styles/PortfolioCard";

interface PortfolioCardProps {
    title: string;
    dates: string;
    description: string;
    tags: string[];
}

function PortfolioCard(props: PortfolioCardProps) {
    return (
        <StyledCardGrid item md={6}>
            <StyledPortfolioCard>
                <StyledTitle>
                    {props.title}
                </StyledTitle>
                <StyledDates>
                    {props.dates}
                </StyledDates>
                <StyledDescription>
                    {props.description}
                </StyledDescription>
                <StyledTagsBox>
                    {props.tags.map((tag, index) => (
                        <StyledTag key={index}>
                            {tag}
                        </StyledTag>
                    ))}
                </StyledTagsBox>
            </StyledPortfolioCard>
        </StyledCardGrid>
    );
}

export default PortfolioCard;