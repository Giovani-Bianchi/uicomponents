// Importações do react
import { useEffect, useState } from "react";

// Importações do react-router-dom
import { Link } from "react-router-dom";

// Importando os Styled Components do Componente de Home
import { ComponentsDropdown, Counter, DiscoverButton, DropdownMenu, GitHubButton, Header, Logo, MenuButton, MenuRow, MenuRows, MenuTextIcon, Nav, NavbarButtons, NavbarItems, StyledLink, TextIcon} from "./navbar.styles.js";

// Importando os ícones do phosphor-icons
import { ArrowSquareOut, CaretDown } from "@phosphor-icons/react";

// Importando os ícones do react-icons
import { ImGithub } from "react-icons/im";

// Importação da Logo
import logo from "../../assets/brand/logo-black-transparent.png"

function Navbar() {

    // Define o estado 'isScrolled' para armazenar se o usuário já rolou a página além de 50px
    const [isScrolled, setIsScrolled] = useState(false);

    // useEffect para lidar com o evento de rolagem da página
    useEffect(() => {

        // Função que verifica a posição do scroll e atualiza o estado
        const handleScroll = () => {
            // Atualiza 'isScrolled' para true se o scrollY for maior que 50, caso contrário, false
            setIsScrolled(window.scrollY > 50);
        };

        // Adiciona o evento de rolagem à janela para disparar a função handleScroll
        window.addEventListener('scroll', handleScroll);

        // Remove o evento de rolagem ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return <>
    
        <Header className={isScrolled ? 'scrolled' : ''}>
            <Nav>
                
                {/* Logo uiComponents */}
                <Link to="/">
                    <Logo src={logo} alt="Logo" />
                </Link>

                {/* Itens da Navbar */}
                <NavbarItems>
                    
                    {/* Link para a página Docs */}
                    <StyledLink>Docs</StyledLink>

                    {/* Dropdown de Components */}
                    <ComponentsDropdown>

                        {/* Texto e Ícone do Dropdown */}
                        <TextIcon>
                            Components
                            <CaretDown size={16} className="arrow-icon" />
                        </TextIcon>

                        {/* Menu do Dropdown */}
                        <DropdownMenu>
                            <MenuRows>

                                {/* Linha 1 do Menu */}
                                <MenuRow>

                                    {/* Buttons */}
                                    <MenuButton href="#">
                                        <MenuTextIcon>
                                            <ArrowSquareOut size={22} />
                                            Buttons
                                        </MenuTextIcon>
                                        <Counter>00</Counter>
                                    </MenuButton>

                                    {/* Checkboxes */}
                                    <MenuButton href="#">
                                        <MenuTextIcon>
                                            <ArrowSquareOut size={22} />
                                            Checkboxes
                                        </MenuTextIcon>
                                        <Counter>00</Counter>
                                    </MenuButton>

                                </MenuRow>

                                {/* Linha 2 do Menu */}
                                <MenuRow>

                                    {/* Accordions */}
                                    <MenuButton href="#">
                                        <MenuTextIcon>
                                            <ArrowSquareOut size={22} />
                                            Accordions
                                        </MenuTextIcon>
                                        <Counter>00</Counter>
                                    </MenuButton>

                                    {/* Radio Buttons */}
                                    <MenuButton href="#">
                                        <MenuTextIcon>
                                            <ArrowSquareOut size={22} />
                                            Radio Buttons
                                        </MenuTextIcon>
                                        <Counter>00</Counter>
                                    </MenuButton>

                                </MenuRow>

                            </MenuRows>
                        </DropdownMenu>

                    </ComponentsDropdown>

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
        </Header>
    
    </>

}

// Exportando o componente de Navbar
export default Navbar;