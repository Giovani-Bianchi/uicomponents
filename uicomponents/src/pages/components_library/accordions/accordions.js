// Importação do styled-components
import styled from "styled-components";

/* --------------------------------------------------------------------------------------------------------
 * Library Section
---------------------------------------------------------------------------------------------------------- */

// Tilte & Subtitle
export const TitleSubtitle = styled.div.attrs({
    className: "d-flex flex-column"
})`
    gap: 16px;
    margin-bottom: 50px;
`;

// TitleH1
export const TitleH1 = styled.h1`
    font-size: 56px;
    font-weight: var(--semi-bold);
    color: var(--secondary-dark);
    margin: 0;
`;

// Text
export const Text = styled.p`
    font-size: 18px;
    font-weight: var(--regular);
    color: var(--secondary-medium);
    margin: 0;
`;