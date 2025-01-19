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

    padding-bottom: 50px;
`;

// Row
export const Row = styled.div.attrs({
    className: "row"
})`
    --bs-gutter-x: 0;
`;

// Component
export const Component = styled.div.attrs({
    className: "col-md-6 d-flex justify-content-center align-items-center" 
})`
    height: 500px;

    background-color: var(--gray);

    border: 1px solid var(--pure);
    border-radius: 8px 0px 0px 8px;
    
    box-shadow: -2px 2px 6px 0px rgba(0, 0, 0, 0.40);
`;

// Code
export const Code = styled.div.attrs({
    className: "col-md-6"
})`
    position: relative;
    height: 500px;
`;

// Tabs
export const Tabs = styled.div.attrs({
    className: "d-flex align-items-center"
})`
    height: 12%;

    gap: 16px;
    padding: 10px 16px;

    background-color: #272822;

    border: 1px solid var(--pure);
    border-radius: 0px 8px 0px 0px;
`;

// Tab
export const Tab = styled.button.attrs({
    className: "tab d-flex align-items-center justify-content-center"
})`
    font-size: 14px;
    font-weight: var(--fw-medium);

    background: none;
    color: var(--pure);

    padding: 5px 10px;
    gap: 4px;

    border: 1px solid var(--pure);
    border-radius: 8px;

    transition: 0.1s;

    // Hover State
    &:hover {
        transform: scale(1.05);
    }

    // Active State
    &.active {
        background-color: var(--pure);
        color: #272822;
    }
`;

// Pre
export const Pre = styled.pre.attrs({})`
    height: 88%;

    margin: 0 !important;

    border: 1px solid var(--pure);
    border-radius: 0px !important;

    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.40);
`;

// Copy Button
export const CopyButton = styled.button.attrs({
    className: "d-flex align-items-center justify-content-center"
})`
    position: absolute;
    top: 80px;
    right: 20px;

    background-color: var(--gray);

    border: none;
    border-radius: 2px;

    padding: 6px;

    transition: background-color 0.2s ease-in-out;

    // Hover State
    &:hover {
        background-color: var(--secondary-lightest);
    }
`;