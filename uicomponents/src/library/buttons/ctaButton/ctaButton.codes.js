/* --------------------------------------------------------------------------------------------------------
 * Component Codes
---------------------------------------------------------------------------------------------------------- */

// Código JSX do componente
export const jsxCode = 
`// Importações do styled-components do CTAButton
import { CTAButton } from "./button.styles.js";

// Importação do ícone do phosphor-icons
import { ArrowRight } from "@phosphor-icons/react";

function Button() {

    return <>
    
        <CTAButton>
            Find out how
            <ArrowRight size={24} className="cta-button-icon" />
        </CTAButton>
    
    </>

}

// Exportando o componente
export default ComponentButton;
`;

// Código JS (Style) do componente
export const jsCode = 
`// Importação do styled-components
import styled from "styled-components";

// Call To Action Button
export const CTAButton = styled.button\`
    color: #F7EBFC;
    background-color: #B54BD2;

    padding: 10px 20px;
    width: fit-content;

    gap: 4px;

    font-size: 18px;

    border-radius: 8px;
    border: none;

    box-shadow: -2px 2px 8px 0px rgba(0, 0, 0, 0.25), 0px 1px 4px 0px var(--light, #E3B7F0) inset, 0px -1px 4px 0px var(--light, #E3B7F0) inset;

    transition: 0.25s;

    // Hover State
    &:hover {
        background-color: #88319A;
        transition: 0.25s;
    }

    // CTA Button Icon
    .cta-button-icon {
        margin-left: 4px;
        transition: transform 0.25s ease-in-out;
    }

    // Hover State do Ícone do CTAButton
    &:hover .cta-button-icon {
        transform: translateX(5px);
    }
\`;
`;