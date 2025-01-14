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
`;

/* --------------------------------------------------------------------------------------------------------
 * Components Section
---------------------------------------------------------------------------------------------------------- */

// Tilte & Subtitle
export const TitleSubtitle = styled.div.attrs({
    className: "d-flex flex-column"
})`
    gap: 16px;
    margin-bottom: 50px;
`;

// Components
export const ComponentsContainer = styled.div.attrs({
    className: "d-flex flex-column"
})``;

// Components Row
export const ComponentsRow = styled.div.attrs({
    className: "row gx-4 gy-4"
})``;