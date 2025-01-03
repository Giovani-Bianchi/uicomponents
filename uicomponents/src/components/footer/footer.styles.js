// Importação do styled-components
import styled from "styled-components";

// Importações do react-router-dom
import { Link } from "react-router-dom";

/* --------------------------------------------------------------------------------------------------------
 * Footer
---------------------------------------------------------------------------------------------------------- */

// Footer
export const FooterContainer = styled.footer`
    padding: 50px 0px;
    background: linear-gradient(270deg, rgba(181, 75, 210, 0.10) 0%, rgba(247, 235, 252, 0.10) 100%);
`;

// Footer Content
export const FooterContent = styled.div.attrs({
    className: "d-flex flex-column"
})`
    gap: 24px;
`;

// Footer Top Content
export const FooterTopContent = styled.div.attrs({
    className: "d-flex align-items-center justify-content-between"
})``;

// Logo
export const Logo = styled.img`
    width: 189px;
    height: 37px;
`;

// Footer Items
export const FooterItems = styled.div.attrs({
    className: "d-flex align-items-center"
})`
    gap: 20px;
`;

// Links do Footer
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

// Divider
export const Divider = styled.div`
    height: 1px;
    background-color: var(--secondary-dark);
`;

// Footer Bottom Content
export const FooterBottomContent = styled.div.attrs({
    className: "d-flex align-items-center justify-content-between"
})``;

// Rights And Author
export const RightsAndAuthor = styled.div.attrs({
    className: "d-flex"
})`
    gap: 48px;
`;

// Text
export const Text = styled.p`
    font-size: 16px;
    font-weight: var(--regular);
    color: var(--secondary-dark);
    margin: 0;
`;

// Author
export const Author = styled.a`
    font-size: 16px;
    font-weight: var(--regular);
    color: var(--pure);

    transition: 0.25s;
    
    // Hover State
    &:hover {
        color: var(--medium);
        transition: 0.25s;
    }
`;

// Socials
export const Socials = styled.div.attrs({
    className: "d-flex"
})`
    gap: 8px;
`;

// SocialLink
export const SocialLink = styled.a.attrs({
    className: "d-flex align-items-center justify-content-center"
})`
    width: 32px;
    height: 32px;

    text-decoration: none;
    cursor: pointer;

    border-radius: 50%;

    color: var(--gray);
    background-color: var(--secondary-dark);

    transition: 0.25s;

    // Hover State
    &:hover {
        color: var(--light);
        transition: 0.25s;
    }
`;