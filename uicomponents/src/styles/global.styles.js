// Importação do styled-components
import styled from "styled-components";

/* --------------------------------------------------------------------------------------------------------
 * General
---------------------------------------------------------------------------------------------------------- */

// Main
export const Main = styled.main`
    background: linear-gradient(270deg, rgba(181, 75, 210, 0.10) 0%, rgba(247, 235, 252, 0.10) 100%);
`;

// Container
export const Container = styled.div.attrs({
    className: "container"
})``;

// Container Fluid
export const ContainerFluid = styled.div.attrs({
    className: "container-fluid"
})`
    background-color: ${props => props.$backgroundColor};
`;

// Row
export const Row = styled.div.attrs({
    className: "row"
})``;

// Div centralizada com col-12 e padding dinâmico
export const FlexCenterDiv = styled.div.attrs({
    className: "col-12 d-flex justify-content-center align-items-center"
})`
    padding: ${props => props.$padding || "0"};
`;

/* --------------------------------------------------------------------------------------------------------
 * To Top Button
---------------------------------------------------------------------------------------------------------- */

// To Top Button
export const ToTopButton = styled.button.attrs({
    className: "d-flex justify-content-center align-items-center"
})`
    position: fixed;
    right: 20px;
    bottom: 20px;

    width: 40px;
    height: 40px;

    background-color: var(--pure);
    color: var(--lightest);

    border: 1px solid var(--medium);
    border-radius: 50%;

    transform: translateX(100px);

    transition: background-color 0.2s ease-in-out, transform 0.5s ease-in-out;

    // Hover State
    &:hover {
        background-color: var(--medium);
    }

    // Se isScrolled for true, o button será movido para a posição inicial
    ${props => props.$isScrolled ? "transform: translateX(0px);" : ""};
`;

/* --------------------------------------------------------------------------------------------------------
 * Home
---------------------------------------------------------------------------------------------------------- */

// DoItYourWay Container Fluid
export const DoItYourWayContainerFluid = styled(ContainerFluid)`
    background: linear-gradient(270deg, rgba(181, 75, 210, 0.10) 0%, rgba(247, 235, 252, 0.10) 100%);
    padding-top: 50px;
    padding-bottom: 100px;
`;

/* --------------------------------------------------------------------------------------------------------
 * Components Library
---------------------------------------------------------------------------------------------------------- */

// Lib Tilte & Subtitle
export const LibTitleSubtitle = styled.div.attrs({
    className: "d-flex flex-column"
})`
    gap: 16px;
    margin-bottom: 50px;
`;

// Lib TitleH1
export const LibTitleH1 = styled.h1`
    font-size: 56px;
    font-weight: var(--semi-bold);
    color: var(--secondary-dark);
    margin: 0;
`;

// Lib Text
export const LibText = styled.p`
    font-size: 18px;
    font-weight: var(--regular);
    color: var(--secondary-medium);
    margin: 0;
`;

// Lib Container
export const LibContainer = styled.div.attrs({
    className: "d-flex flex-column"
})``;

// Lib Row
export const LibRow = styled.div.attrs({
    className: "row gx-4 gy-4"
})``;