// Importação do styled-components
import styled from "styled-components";

// Importando a Brand na versão minimal
import brand from "../../assets/brand/logo-black-minimal-transparent.png";

/* --------------------------------------------------------------------------------------------------------
 * Component Container
---------------------------------------------------------------------------------------------------------- */

// Component Box
export const ComponentBox = styled.div.attrs({
    className: "d-flex flex-column col-md-4"
})``;

// CTA
export const CTA = styled.p.attrs({
    className: "d-flex align-items-center"
})`
    position: absolute;

    bottom: 20px;
    right: 20px;

    padding: 5px 15px;
    margin: 0;

    color: var(--lightest);
    background: var(--pure);

    font-size: 14px;
    font-weight: var(--fw-medium);

    border-radius: 8px;

    // Translate
    transform: translateY(60px);
    pointer-events: none;

    transition: transform 0.5s ease-in-out;
`;

// Component
export const Component = styled.div.attrs({
    className: "d-flex justify-content-center align-items-center"
})`
    position: relative;
    
    height: 500px;

    background: var(--gray);
    box-shadow: -2px 2px 6px 0px rgba(0, 0, 0, 0.25);

    border: 1px solid var(--secondary-dark);
    border-radius: 8px;

    margin-bottom: 10px;

    text-decoration: none;

    cursor: pointer;
    overflow: hidden;

    // Hover State
    &:hover ${CTA} {
        transform: translateY(0);
        pointer-events: auto;
    }
`;

// Brand
export const Brand = styled.img.attrs({
    src: brand
})`
    position: absolute;
    right: 10px;
    top: 10px;
`;

// Text
export const Text = styled.p`
    font-size: ${props => props.$fontSize || "18px"};
    font-weight: ${props => props.$fontWeight || "var(--regular)" };
    color: ${props => props.$textColor || "var(--secondary-dark)" };
    margin: 0;

    text-align: ${props => props.$textAlign || ""};
`;