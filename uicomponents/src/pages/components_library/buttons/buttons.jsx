// Importando o Styled Components Global
import { Container, LibContainer, LibRow, LibText, LibTitleH1, LibTitleSubtitle, Main } from "../../../styles/global.styles.js";

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

            {/* Library Section */}
            <section id="library-section">
                <Container>

                    {/* Title & Subtitle */}
                    <LibTitleSubtitle>
                        <LibTitleH1>Buttons</LibTitleH1>
                        <LibText>Browse all the buttons in our components library.</LibText>
                    </LibTitleSubtitle>

                    {/* Lib Container */}
                    <LibContainer>
                        <LibRow>

                            <ComponentContainer category="buttons" name="Button">
                                <button>Button</button>
                            </ComponentContainer>

                        </LibRow>
                    </LibContainer>

                </Container>
            </section>

        </Main>

        {/* Importação do Footer */}
        <Footer />

    </>

}

// Exportando o componente Buttons
export default Buttons;