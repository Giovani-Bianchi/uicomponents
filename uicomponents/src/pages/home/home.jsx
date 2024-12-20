// Importando os Styled Components do Componente de Home
import { CTAButton, HeroContent, Text, TitleH1 } from "./home.styles.js"

// Importando o Styled Components Global
import { Container, FlexCenterDiv, Row } from "../../styles/global.styles.js"

// Importando os componentes
import Navbar from "../../components/navbar/navbar.jsx";

function Home() {

    return <>

        {/* Importação da Navbar */}
        <Navbar />

        {/* Main */}
        <main>

            {/* Hero Section */}
            <section id="hero-section">
                <Container>
                    <Row>

                        {/* Conteúdo do Hero */}
                        <FlexCenterDiv $padding="150px 0px">
                            <HeroContent>
                                <TitleH1>A lot of React Components in one place ready to use</TitleH1>
                                <Text>A powerful React component library for building modern, intuitive, and responsive interfaces effortlessly.</Text>
                                <CTAButton>Get Started</CTAButton>
                            </HeroContent>
                        </FlexCenterDiv>

                    </Row>
                </Container>
            </section>

        </main>

    </>

}

// Exportando o componente Home
export default Home;