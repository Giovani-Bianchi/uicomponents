// Importando os Styled Components do Componente de Components
import { ComponentsContainer, ComponentsRow, Text, TitleH1, TitleSubtitle } from "./components.styles.js";

// Importando o Styled Components Global
import { Container, Main } from "../../styles/global.styles.js";

// Importando os componentes
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import ComponentCard from "../../components/component_card/component_card.jsx";

function Components() {

    return <>
    
        {/* Importação da Navbar */}
        <Navbar $gradient />

        {/* Main */}
        <Main>
            
            {/* Components Section */}
            <section id="components-section">
                <Container>

                    {/* Title & Subtitle */}
                    <TitleSubtitle>
                        <TitleH1>Browse All</TitleH1>
                        <Text $textColor="var(--secondary-medium)">Elements build with React + Styled Components + Bootstrap.</Text>
                    </TitleSubtitle>

                    {/* Components */}
                    <ComponentsContainer>
                        <ComponentsRow>

                            {/* Buttons */}
                            <ComponentCard title="Buttons" counter="1" link="/components/buttons" />

                            {/* Accordions */}
                            <ComponentCard title="Accordions" counter="1" link="/components/accordions" />

                            {/* Checkboxes */}
                            <ComponentCard title="Checkboxes" counter="0" link="/components/checkboxes" />

                            {/* Radio Buttons */}
                            <ComponentCard title="Radio Buttons" counter="0" link="/components/radiobuttons" />

                        </ComponentsRow>
                    </ComponentsContainer>

                </Container>
            </section>

        </Main>

        {/* Importação do Footer */}
        <Footer />

    </>

}

// Exportando o componente Components
export default Components;