// Importação do styled-components
import styled from "styled-components";

// Importações do react-router-dom
import { Link } from "react-router-dom";

/* --------------------------------------------------------------------------------------------------------
 * Navbar
---------------------------------------------------------------------------------------------------------- */

// Nav
export const Nav = styled.nav.attrs({
    className: "container d-flex justify-content-between align-items-center"
})`
    height: 100px;
`;

// Logo
export const Logo = styled.img`
    width: 189px;
    height: 37px;
`;

// Navbar Items
export const NavbarItems = styled.div.attrs({
    className: "d-flex"
})`
    gap: 20px;
`;

// Links da Navbar
export const StyledLink = styled(Link)`
    display: inline-block;
    position: relative;

    color: var(--secondary-dark);
    text-decoration: none;

    font-size: 16px;
    font-weight: var(--regular);

    /* After Animation */
    &::after {
        content: '';
        position: absolute;

        width: 100%;
        height: 2px;

        bottom: 0;
        left: 0;

        background-color: var(--secondary-dark);

        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    /* Hover After State */
    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

// Menu de Components
export const ComponentsMenu = styled.div``

// Texto e Ícone de Components
export const TextIcon = styled.div.attrs({
    className: "d-flex align-items-center"
})`
    color: var(--secondary-dark);
    text-decoration: none;
`;

// Navbar Buttons
export const NavbarButtons = styled.div.attrs({
    className: "d-flex"
})`
    gap: 16px;
`;

// Discover Button
export const DiscoverButton = styled.button`
    background-color: var(--gray);

    color: var(--secondary-dark);
    font-size: 16px;
    font-weight: var(--regular);

    border: 1px solid var(--secondary-dark);
    border-radius: 8px;

    height: 40px;
    
    padding: 4px 16px;

    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25), -2px 4px 8px 0px rgba(0, 0, 0, 0.25), 0px 1px 4px 0px rgba(0, 0, 0, 0.25) inset;

    transition: 0.25s;
    
    // Hover State
    &:hover {
        background: linear-gradient(270deg, rgba(181, 75, 210, 0.10) 0%, rgba(247, 235, 252, 0.10) 100%);
        transition: 0.25s;
    }
`;

// GitHub Button
export const GitHubButton = styled.button.attrs({
    className: "d-flex align-items-center"
})`
    background-color: var(--secondary-dark);

    color: var(--gray);
    font-size: 16px;
    font-weight: var(--medium);

    border-radius: 8px;

    height: 40px;

    padding: 4px 32px;
    gap: 6px;

    box-shadow: -2px 4px 8px 0px rgba(0, 0, 0, 0.50), 0px 2px 4px 0px rgba(244, 244, 244, 0.25) inset;

    transition: 0.25s;

    // Hover State
    &:hover {
        color: var(--lightest);
        transition: 0.25s;
    }
`;