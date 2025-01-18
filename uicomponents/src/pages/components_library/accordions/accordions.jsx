// Importando os Styled Components do Componente de Accordions
import { Text, TitleH1, TitleSubtitle } from "./accordions.js";

// Importando o Styled Components Global
import { Container, ItemsContainer, ItemsRow, Main } from "../../../styles/global.styles.js";

// Importando os componentes
import Navbar from "../../../components/navbar/navbar.jsx";
import Footer from "../../../components/footer/footer.jsx";
import ComponentContainer from "../../../components/component_container/component_container.jsx";

function Accordions() {

    return <>
    
        {/* Importação da Navbar */}
        <Navbar $gradient />

        {/* Main */}
        <Main>

            {/* Library Section */}
            <section id="library-section">
                <Container>

                    {/* Title & Subtitle */}
                    <TitleSubtitle>
                        <TitleH1>Accordions</TitleH1>
                        <Text>Browse all the accordions in our components library.</Text>
                    </TitleSubtitle>

                    {/* Items Container */}
                    <ItemsContainer>
                        <ItemsRow>

                            <ComponentContainer category="accordions" name="Accordion">
                                <button>Accordion</button>
                            </ComponentContainer>

                        </ItemsRow>
                    </ItemsContainer>

                </Container>
            </section>

        </Main>

        {/* Importação do Footer */}
        <Footer />

    </>

}

// Exportando o componente Accordions
export default Accordions;