// Importações do react-router-dom
import { Link } from "react-router-dom";

// Importando os Styled Components do Componente de Home
import { ComponentsMenu, ComponentsTextIcon, DiscoverButton, GitHubButton, Logo, Nav, NavbarButtons, NavbarItems, StyledLink} from "./navbar.styles.js";

// Importando os ícones do phosphor-icons
import { CaretDown } from "@phosphor-icons/react";

// Importando os ícones do react-icons
import { ImGithub } from "react-icons/im";

// Importação da Logo
import logo from "../../assets/brand/logo-black-transparent.png"

function Navbar() {

    return <>
    
        <header className="fixed-top">
            <Nav>
                
                {/* Logo uiComponents */}
                <Link to="/">
                    <Logo src={logo} alt="Logo" />
                </Link>

                {/* Itens da Navbar */}
                <NavbarItems>
                    
                    {/* Link para a página Docs */}
                    <StyledLink>Docs</StyledLink>

                    {/* Dropdown Menu de Components */}
                    <ComponentsMenu>
                        <ComponentsTextIcon>
                            Components
                            <CaretDown size={16} />
                        </ComponentsTextIcon>
                    </ComponentsMenu>

                    {/* Link âncora para o Footer */}
                    <StyledLink>Contact</StyledLink>

                </NavbarItems>

                {/* Botões da Navbar */}
                <NavbarButtons>

                    {/* Discover Button */}
                    <DiscoverButton>Discover</DiscoverButton>
                    
                    {/* GitHub Button */}
                    <GitHubButton>
                        <ImGithub size={24} />
                        GitHub
                    </GitHubButton>
                    
                </NavbarButtons>

            </Nav>
        </header>
    
    </>

}

// Exportando o componente de Navbar
export default Navbar;