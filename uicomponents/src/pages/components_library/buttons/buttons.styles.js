// Importação do styled-components
import styled from "styled-components";

/* --------------------------------------------------------------------------------------------------------
 * General
---------------------------------------------------------------------------------------------------------- */

// TitleH1
export const TitleH1 = styled.h1`
    font-size: 56px;
    font-weight: var(--semi-bold);
    color: var(--secondary-dark);
    margin: 0;
`;

// Text
export const Text = styled.p`
    font-size: ${props => props.$fontSize || "18px"};
    font-weight: ${props => props.$fontWeight || "var(--regular)" };
    color: ${props => props.$textColor || "var(--secondary-dark)" };
    margin: 0;

    text-align: ${props => props.$textAlign || ""};
`;

/* --------------------------------------------------------------------------------------------------------
 * Buttons Section
---------------------------------------------------------------------------------------------------------- */

// Tilte & Subtitle
export const TitleSubtitle = styled.div.attrs({
    className: "d-flex flex-column"
})`
    gap: 16px;
    margin-bottom: 50px;
`;