// Importação do styled-components
import styled from "styled-components";

// Importações do react-router-dom
import { Link } from "react-router-dom";

/* --------------------------------------------------------------------------------------------------------
 * Navbar
---------------------------------------------------------------------------------------------------------- */

// Header
export const Header = styled.header.attrs({
    className: "fixed-top"
})`
    background: ${props => props.$gradient ? "linear-gradient(270deg, rgba(181, 75, 210, 0.10) 0%, rgba(247, 235, 252, 0.10) 100%)" : "" };
    
    transition: 0.25s ease-in-out;

    /* Alterando a background color do header quando a classe scrolled for adicionada com o JS */
    &.scrolled {
        background-color: var(--gray);
        box-shadow: 0px 2px 8px 0px rgba(14, 14, 15, 0.25);
    }
`;

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

// Dropdown de Components
export const ComponentsDropdown = styled.div`
    position: relative;

    // Transition
    .arrow-icon {
        transition: transform 0.15s ease-in-out;
    }

    // Hover State
    &:hover .arrow-icon {
        transform: rotate(180deg);
    }
`;

// Dropdown Menu
export const DropdownMenu = styled.div`
    position: absolute;
    left: 0;
    top: calc(100% + 10px);

    padding: 16px;

    background: var(--gray);

    border: 1px solid var(--medium);
    border-radius: 8px;

    box-shadow: 0px 1px 8px 0px var(--medium);

    opacity: 0;
    pointer-events: none;

    transform: translateY(-10px);

    transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;

    /* Manter visível quando houver hover no TextIcon ou DropdownMenu */
    ${ComponentsDropdown}:hover & {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }

    /* Cria um espaço invisível para hover */
    &::before {
        content: '';
        position: absolute;

        left: 0;
        top: -11px;

        width: 100%;
        height: 10px;
    }
`;

// Texto e Ícone de Components
export const TextIcon = styled.div.attrs({
    className: "d-flex align-items-center"
})`
    color: var(--secondary-dark);
    text-decoration: none;

    gap: 2px;

    cursor: pointer;
`;

// Menu Rows
export const MenuRows = styled.div.attrs({
    className: "d-flex flex-column"
})`
    gap: 10px;
`;

// Menu Row
export const MenuRow = styled.div.attrs({
    className: "d-flex"
})`
    gap: 10px;
`;

// Menu Button
export const MenuButton = styled.a.attrs({
    className: "d-flex justify-content-between align-items-center"
})`
    width: 200px;

    background: linear-gradient(270deg, rgba(181, 75, 210, 0.10) 0%, rgba(247, 235, 252, 0.10) 100%);

    padding: 6px 10px;

    text-decoration: none;

    border: 2px solid var(--medium);
    border-radius: 8px;

    box-shadow: -2px 2px 8px 0px rgba(227, 183, 240, 0.20);

    transition: transform 0.1s ease-in-out;

    // Hover State
    &:hover {
        transform: scale(1.05);
    }
`;

// Menu Text Icon
export const MenuTextIcon = styled.div.attrs({
    className: "d-flex"
})`
    color: var(--secondary-dark);

    gap: 4px;
`;

// Counter
export const Counter = styled.div`
    color: var(--medium);
    background-color: var(--light);

    font-size: 14px;
    font-weight: var(--fw-medium);

    padding: 2px 4px;
    
    border: 1px solid var(--medium);
    border-radius: 8px;
`;

// Navbar Buttons
export const NavbarButtons = styled.div.attrs({
    className: "d-flex"
})`
    gap: 16px;
`;

// Discover Button
export const DiscoverButton = styled(Link).attrs({
    className: "d-flex align-items-center",
    to: "/components"
})`
    background-color: var(--gray);

    color: var(--secondary-dark);
    font-size: 16px;
    font-weight: var(--regular);

    border: 1px solid var(--secondary-dark);
    border-radius: 8px;

    height: 40px;
    
    padding: 4px 16px;

    text-decoration: none;

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

    border: none;
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