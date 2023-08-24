import { 
    StyledCardGrid,
    StyledDates,
    StyledDescription,
    StyledPortfolioCard,
    StyledTag,
    StyledTagsBox,
    StyledTitle
} from "../../styles/PortfolioCard";

function PortfolioCard() {
    return (
        <StyledCardGrid item md={6}>
            <StyledPortfolioCard>
                <StyledTitle>
                    Title
                </StyledTitle>
                <StyledDates>
                    Start to End
                </StyledDates>
                <StyledDescription>
                    Here is a nice little description.
                </StyledDescription>
                <StyledTagsBox>
                    <StyledTag>
                        Tag
                    </StyledTag>
                    <StyledTag>
                        Tag
                    </StyledTag>
                    <StyledTag>
                        Tag
                    </StyledTag>
                </StyledTagsBox>
            </StyledPortfolioCard>
        </StyledCardGrid>
    );
}

export default PortfolioCard;