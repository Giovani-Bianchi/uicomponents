// Importação do styled-components
import styled from "styled-components";

/* --------------------------------------------------------------------------------------------------------
 * General
---------------------------------------------------------------------------------------------------------- */

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