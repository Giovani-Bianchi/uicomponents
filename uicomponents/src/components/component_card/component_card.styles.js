// Importação do styled-components
import styled from "styled-components";

// Importações do react-router-dom
import { Link } from "react-router-dom";

/* --------------------------------------------------------------------------------------------------------
 * Component Card
---------------------------------------------------------------------------------------------------------- */

// Component Box
export const ComponentBox = styled.div.attrs({
    className: "d-flex flex-column col-md-3"
})``;

// Component
export const Component = styled.div.attrs({
    className: "d-flex justify-content-center align-items-center"
})`
    position: relative;
    height: 280px;

    padding: 0px 16px;

    background: var(--secondary-black);

    border-radius: 8px;

    box-shadow: -2px 4px 8px 0px rgba(181, 75, 210, 0.50);
`;

// Gradient Background
export const GradientBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    
    border-radius: 8px;

    opacity: 0;
    background: linear-gradient(226deg, #15161A 85.17%, #B54BD2 100%);
    
    // Hover State
    opacity: ${({ $isHovered }) => $isHovered ? '1' : '0'};
    transition: opacity 0.35s ease-in-out;
`;

// Counter
export const Counter = styled.div.attrs({
    className: 'd-flex justify-content-center align-items-center'
})`
    position: absolute;
    right: -14px;
    top: -16px;

    width: 30px;
    padding: 5px;

    font-size: 14px;
    color: var(--lightest);
    font-weight: var(--fw-medium);

    background-color: var(--pure);
    box-shadow: -2px 2px 8px 0px rgba(181, 75, 210, 0.50);

    border-radius: 50%;
`;

// Component Content
export const ComponentContent = styled.div.attrs({
    className: "d-flex flex-column justify-content-center align-items-center"
})`
    width: 100%;
    z-index: 1;

    gap: 10px;
`;

// TitleH2
export const TitleH2 = styled.h2`
    font-size: 24px;
    font-weight: var(--semi-bold);
    color: var(--lightest);
    margin: 0;
`;

// Call To Action Button
export const CTAButton = styled(Link).attrs({
    className: "d-flex justify-content-center align-items-center"
})`
    color: var(--lightest);
    background-color: var(--pure);

    padding: 10px 0px;
    width: 100%;

    font-size: 14px;

    border-radius: 8px;
    border: none;

    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);

    text-decoration: none;

    transition: 0.25s;

    // Hover State
    &:hover {
        background-color: var(--medium);
        transition: 0.25s;
    }

    // Transition
    .cta-button-icon {
        transition: transform 0.25s ease-in-out;
    }

    // Hover State do Ícone do CTAButton
    &:hover .cta-button-icon {
        transform: translateX(5px);
    }
`;