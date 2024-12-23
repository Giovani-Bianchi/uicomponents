// Importação do styled-components
import styled from "styled-components";

/* --------------------------------------------------------------------------------------------------------
 * General
---------------------------------------------------------------------------------------------------------- */

// TitleH1
export const TitleH1 = styled.h1`
    font-size: ${props => props.$fontSize || "56px"};
    font-weight: ${props => props.$fontWeight || "var(--semi-bold)" };
    color: ${props => props.$textColor || "var(--secondary-dark)" };
    margin: 0;
`;

// TitleH2
export const TitleH2 = styled.h2`
    font-size: ${props => props.$fontSize || "16px"};
    font-weight: ${props => props.$fontWeight || "var(--medium)" };
    color: ${props => props.$textColor || "var(--pure)" };
    margin: 0;
`;

// TitleH3
export const TitleH3 = styled.h3`
    font-size: ${props => props.$fontSize || "24px"};
    font-weight: ${props => props.$fontWeight || "var(--semi-bold)" };
    color: ${props => props.$textColor || "var(--secondary-dark)" };
    margin: 0;
`;

// Text
export const Text = styled.p`
    font-size: ${props => props.$fontSize || "18px"};
    font-weight: ${props => props.$fontWeight || "var(--regular)" };
    color: ${props => props.$textColor || "var(--secondary-dark)" };
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

/* --------------------------------------------------------------------------------------------------------
 * Features Section
---------------------------------------------------------------------------------------------------------- */

// Features Title
export const FeaturesTitle = styled.div.attrs({
    className: "d-flex flex-column"
})`
    margin-bottom: 50px;
`;

// Features
export const Features = styled.div.attrs({
    className: "d-flex flex-column align-items-center"
})`
    gap: 50px;
`;

// Features Row
export const FeaturesRow = styled.div.attrs({
    className: "row gx-4 gy-3"
})``;

// Large Feature
export const LargeFeature = styled.div.attrs({
    className: "col-md-7"
})``;

// Small Feature
export const SmallFeature = styled.div.attrs({
    className: "col-md-5"
})``;

// Feature
export const Feature = styled.div`
    min-height: 300px;

    background-color: var(--gray);

    padding: 20px 20px 50px 20px;

    border-radius: 8px;
    border: 2px solid var(--secondary-dark);

    box-shadow: -4px 4px 8px 0px rgba(0, 0, 0, 0.25);
`;

// Title and Text
export const TitleAndText = styled.div.attrs({
    className: "d-flex flex-column"
})`
    gap: 20px;
`;

// Features Text (Estendendo os estilos da const Text)
export const FeaturesText = styled(Text)`
    min-height: 100px;
`;

// Feature Demo (Demonstração da feature)
export const FeatureDemo = styled.div.attrs({
    className: "d-flex align-items-center"
})`
    gap: 10px;
`;

// Feature Button
export const FeatureButton = styled.button`
    padding: 10px 20px;

    border: none;
    border-radius: 8px;

    font-size: 18px;

    background-color: ${props => props.$backgroundColor};
    color: var(--lightest);
`;

// Feature Example
export const FeatureExample = styled.div.attrs({
    className: "d-flex flex-column"
})`
    gap: 4px;
`;

// Checkbox Checkmark
export const CheckboxCheckmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;

    width: 24px;
    height: 24px;

    border: 1px solid var(--medium);
    border-radius: 4px;

    background-color: transparent;

    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;

// Checkbox Container
export const CheckboxContainer = styled.label.attrs({
})`
    display: block;
    position: relative;
    
    padding-left: 32px;

    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    // Desce o texto da checkbox
    ${Text} {
        position: relative;
        top: 3px;
    }

    // Esconde a checkbox
    input {
        position: absolute;
        width: 0;
        height: 0;

        opacity: 0;
        cursor: pointer;
    }

    // Mostra a checkmark quando o checkbox for checked
    & input:checked ~ ${CheckboxCheckmark}:after {
        display: block;
    }

    // Estiliza a checkmark
    & ${CheckboxCheckmark}:after {
        left: 9px;
        top: 5px;

        width: 5px;
        height: 10px;

        border: solid var(--medium);
        border-width: 0 2px 2px 0;
        
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

// RadioButton Checkmark
export const RadioButtonCheckmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;

    width: 18px;
    height: 18px;

    border: 1px solid var(--pure);
    border-radius: 50%;

    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`;

// RadioButton Container
export const RadioButtonContainer = styled.label.attrs({
})`
    display: block;
    position: relative;
    
    padding-left: 24px;

    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    // Desce o texto do radiobutton
    ${Text} {
        position: relative;
        top: 1px;
    }

    // Esconde o radiobutton
    input {
        position: absolute;
        width: 0;
        height: 0;

        opacity: 0;
        cursor: pointer;
    }

    // Mostra a checkmark quando o radiobutton for checked
    & input:checked ~ ${RadioButtonCheckmark}:after {
        display: block;
    }

    // Estiliza a checkmark
    & ${RadioButtonCheckmark}:after {
        top: 5px;
        left: 5px;

        width: 6px;
        height: 6px;

        background-color: var(--pure);

        border-radius: 50%;
    }
`;

// Purple Link
export const PurpleLink = styled.span`
    color: var(--pure);
    text-decoration: underline;

    cursor: pointer;

    transition: 0.25s;
    
    // Hover State
    &:hover {
        color: var(--medium);
        transition: 0.25s;
    }
`;