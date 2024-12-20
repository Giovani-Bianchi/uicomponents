// Importação do styled-components
import styled from "styled-components";

/* --------------------------------------------------------------------------------------------------------
 * General
---------------------------------------------------------------------------------------------------------- */

// TitleH1
export const TitleH1 = styled.h1`
    font-size: ${props => props.$fontSize || "56px"};
    font-weight: ${props => props.$fontWeight || "var(--semi-bold)" };
    margin: 0;
`;

// TitleH2
export const TitleH2 = styled.h2`
    font-size: ${props => props.$fontSize || "16px"};
    font-weight: ${props => props.$fontWeight || "var(--medium)" };
    margin: 0;
`;

// TitleH3
export const TitleH3 = styled.h3`
    font-size: ${props => props.$fontSize || "24px"};
    font-weight: ${props => props.$fontWeight || "var(--semi-bold)" };
    margin: 0;
`;

// Text
export const Text = styled.p`
    font-size: ${props => props.$fontSize || "18px"};
    font-weight: var(--regular);
    margin: 0;
`;

// Call To Action Button
export const CTAButton = styled.button`
    color: var(--lightest);
    background-color: var(--pure);

    padding: 10px 20px;
    width: fit-content;

    font-size: 18px;

    border-radius: 8px;
    border: none;

    box-shadow: -2px 2px 8px 0px rgba(0, 0, 0, 0.25), 0px 1px 4px 0px var(--light, #E3B7F0) inset, 0px -1px 4px 0px var(--light, #E3B7F0) inset;

    transition: 0.25s;

    // Hover State
    &:hover {
        background-color: var(--medium);
        transition: 0.25s;
    }
`;

/* --------------------------------------------------------------------------------------------------------
 * Hero Section
---------------------------------------------------------------------------------------------------------- */

// Hero Content
export const HeroContent = styled.div.attrs({
    className: "col-9 d-flex flex-column align-items-center text-center"
})`
    gap: 24px;
`;