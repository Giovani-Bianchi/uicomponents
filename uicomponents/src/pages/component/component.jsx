// Importações do react
import { useEffect, useState } from "react";

// Importações do react-router-dom
import { useLocation } from "react-router-dom";

// Importando as funções do Component
import { handleActiveTab, handleCode, handleCopy, initializeTooltips } from "./component.functions.js";

// Importando os Styled Components do Component
import { Code, ComponentBox, CopyButton, Pre, Row, Tab, Tabs, TitleH1 } from "./component.styles.js";

// Importando o Styled Components Global
import { Container, Main } from "../../styles/global.styles.js";

// Importações do phosphor-icons
import { CopySimple } from "@phosphor-icons/react";

// Importações do react-icons
import { FaJs, FaReact } from "react-icons/fa";

// Importações do Prism.js
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-jsx';

// Importando os componentes
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";

// Importando os components
import { components } from "../../constants/buttons.js";

function Component() {

    // Instanciando o location
    const location = useLocation();

    // Obtendo as informações do location state
    const { name } = location.state;

    // Obtendo as informações do componente
    const { component: SelectedComponent, jsxCode, jsCode } = components[name];

    // Variável de estado para armazenar o código
    const [code, setCode] = useState(jsxCode);

    // Variável de estado par armazenar o ícone do botão de copiar
    const [copyIcon, setCopyIcon] = useState(<CopySimple size={22} />);

    // Inicializando as tooltips
    useEffect(() => {
        initializeTooltips();
    }, []);

    // Ativando o Prism.js
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return <>

        {/* Importação da Navbar */}
        <Navbar $gradient />

        {/* Main */}
        <Main>

            {/* Component Section */}
            <section id="component-section">
                <Container>

                    {/* Title */}
                    <TitleH1>{name}</TitleH1>

                    {/* Component - Code Visualizer */}
                    <Row>

                        {/* ComponentBox */}
                        <ComponentBox>
                            {SelectedComponent && <SelectedComponent />}
                        </ComponentBox>

                        {/* Code */}
                        <Code>

                            {/* Tabs */}
                            <Tabs>
                                            
                                {/* React Tab */}
                                <Tab className="active" onClick={() => handleCode(setCode, jsxCode)} onFocus={(e) => handleActiveTab(e)}>
                                    <FaReact size={20} />
                                    JSX
                                </Tab>

                                {/* JS Tab */}
                                <Tab onClick={() => handleCode(setCode, jsCode)} onFocus={(e) => handleActiveTab(e)}>
                                    <FaJs size={20} />
                                    JavaScript
                                </Tab>

                            </Tabs>

                            {/* Copy */}
                            <CopyButton onClick={() => handleCopy(code, setCopyIcon)} id="copy-button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Copy code" data-bs-custom-class="custom-tooltip">
                                {copyIcon}
                            </CopyButton>
                    
                            {/* Code Visualizer */}
                            <Pre>
                                <code className="language-jsx">
                                    {code}
                                </code>
                            </Pre>

                        </Code>

                    </Row>

                </Container>
            </section>

        </Main>

        {/* Importação do Footer */}
        <Footer />

    </>

}

// Exportando o Component
export default Component;