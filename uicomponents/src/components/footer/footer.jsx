// Importações do react-router-dom
import { Link } from "react-router-dom";

// Importando os Styled Components do Componente de Footer
import { Author, Divider, FooterBottomContent, FooterContainer, FooterContent, FooterItems, FooterTopContent, Logo, RightsAndAuthor, SocialLink, Socials, StyledLink, Text } from "./footer.styles.js"

// Importando o Styled Components Global
import { Container } from "../../styles/global.styles.js"

// Importando os ícones do react-icons
import { TiSocialLinkedin } from "react-icons/ti";
import { PiGithubLogoFill } from "react-icons/pi";

// Importação da Logo
import logo from "../../assets/brand/logo-black-transparent.png"

function Footer() {

    return <>
    
        {/* Footer */}
        <FooterContainer>

            <Container>
                <FooterContent>

                    {/* Conteúdo do Top Footer */}
                    <FooterTopContent>

                        {/* Logo uiComponents */}
                        <Link to="/">
                            <Logo src={logo} alt="Logo" />
                        </Link>

                        {/* Itens do Footer */}
                        <FooterItems>

                            {/* Link para a página Docs */}
                            <StyledLink>Docs</StyledLink>

                            {/* Link para a página Components */}
                            <StyledLink>Components</StyledLink>

                        </FooterItems>

                    </FooterTopContent>

                    {/* Divider */}
                    <Divider />

                    {/* Conteúdo do Bottom Footer */}
                    <FooterBottomContent>

                        {/* Direitos e Autor do Site */}
                        <RightsAndAuthor>
                            <Text>© 2024 uiComponents. All rights reserved.</Text>
                            <Text>Made by <Author href="https://github.com/Giovani-Bianchi" target="_blank" rel="noopener noreferrer">Giovani</Author></Text>
                        </RightsAndAuthor>

                        {/* Redes Sociais */}
                        <Socials>
                            
                            {/* Linkedin */}
                            <SocialLink href="https://www.linkedin.com/in/giovaniwhb/" target="_blank" rel="noopener noreferrer">
                                <TiSocialLinkedin size={24} />
                            </SocialLink>

                            {/* GitHub */}
                            <SocialLink href="https://github.com/Giovani-Bianchi/uicomponents" target="_blank" rel="noopener noreferrer">
                                <PiGithubLogoFill size={22} />
                            </SocialLink>

                        </Socials>

                    </FooterBottomContent>

                </FooterContent>
            </Container>

        </FooterContainer>
    
    </>

}

// Exportando o componente Footer
export default Footer;