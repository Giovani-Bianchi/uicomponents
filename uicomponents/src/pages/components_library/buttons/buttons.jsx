// Importando os Styled Components do Componente de Components
import { Text, TitleH1, TitleSubtitle } from "./buttons.styles.js";

// Importando o Styled Components Global
import { Container, ItemsContainer, ItemsRow, Main } from "../../../styles/global.styles.js";

// Importando os componentes
import Navbar from "../../../components/navbar/navbar.jsx";
import Footer from "../../../components/footer/footer.jsx";
import ComponentContainer from "../../../components/component_container/component_container.jsx";

function Buttons() {

    return <>
    
        {/* Importação da Navbar */}
        <Navbar $gradient />

        {/* Main */}
        <Main>

            {/* Buttons Section */}
            <section id="buttons-section">
                <Container>

                    {/* Title & Subtitle */}
                    <TitleSubtitle>
                        <TitleH1>Buttons</TitleH1>
                        <Text>Browse all the buttons in our components library.</Text>
                    </TitleSubtitle>

                    {/* Items Container */}
                    <ItemsContainer>
                        <ItemsRow>

                            <ComponentContainer category="buttons" name="Button">
                                <button>Button</button>
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

// Exportando o componente Buttons
export default Buttons;