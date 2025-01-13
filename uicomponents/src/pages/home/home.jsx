// Importando os Styled Components do Componente de Home
import { Badge, CheckboxCheckmark, CheckboxContainer, CTAButton, CTAContent, DoItYourWayContent, Feature, FeatureButton, FeatureDemo, FeatureExample, Features, FeaturesRow, FeaturesText, GradientCircle, HeroContent, LaptopDiv, LaptopImage, LargeFeature, LineTitle, PurpleLink, RadioButtonCheckmark, RadioButtonContainer, SmallFeature, TechnologiesBadges, TechnologiesContent, Text, TitleAndText, TitleH1, TitleH2, TitleH3 } from "./home.styles.js"

// Importando o Styled Components Global
import { Container, ContainerFluid, DoItYourWayContainerFluid, FlexCenterDiv, Row } from "../../styles/global.styles.js"

// Importações dos ícones do phosphor-icons
import { ArrowRight } from "@phosphor-icons/react";

// Importações dos ícones do react-icons
import { FaBootstrap, FaReact } from "react-icons/fa";

// Importação das imagens
import laptop from "../../assets/pages/home/laptop.png";

// Importando os componentes
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";

function Home() {

    return <>

        {/* Importação da Navbar */}
        <Navbar />

        {/* Main */}
        <main>

            {/* Hero Section */}
            <section id="hero-section">

                {/* Gradient Circles */}

                {/* Large Gradient Circle Left */}
                <GradientCircle $width="500px" $height="500px" $top="5%" $left="10%" />

                {/* Small Gradient Circle Top Middle */}
                <GradientCircle $width="250px" $height="250px" $top="5%" $left="45%" />

                {/* Small Gradient Circle Top Right */}
                <GradientCircle $width="250px" $height="250px" $top="5%" $left="75%" />

                {/* Large Gradient Circle Right */}
                <GradientCircle $width="500px" $height="500px" $top="20%" $left="60%" />

                <Container>
                    <Row>

                        {/* Conteúdo do Hero */}
                        <FlexCenterDiv $padding="100px 0px">
                            <HeroContent>
                                <TitleH1>A lot of React Components in one place ready to use</TitleH1>
                                <Text>A powerful React component library for building modern, intuitive, and responsive interfaces effortlessly.</Text>
                                <CTAButton>Get Started</CTAButton>
                            </HeroContent>
                        </FlexCenterDiv>

                    </Row>
                </Container>
            </section>

            {/* Features Section */}
            <section id="features-section">

                {/* Gradient Circle */}

                {/* Large Gradient Circle Middle */}
                <GradientCircle $width="500px" $height="500px" $top="100%" $left="35%" />

                <Container>

                    {/* Título de Features */}
                    <LineTitle>
                        <TitleH2>FEATURES</TitleH2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="12" viewBox="0 0 56 12" fill="none">
                            <path d="M55.7735 6L50 0.226497L44.2265 6L50 11.7735L55.7735 6ZM0 7H50V5H0V7Z" fill="#B54BD2"/>
                        </svg>
                    </LineTitle>

                    {/* Features */}
                    <Features>

                        {/* 1° Row de Features */}
                        <FeaturesRow>

                            {/* Feature 1 - Customizable Components */}
                            <LargeFeature>
                                <Feature>

                                    {/* Título e o Texto */}
                                    <TitleAndText>
                                        <TitleH3>Customizable Components</TitleH3>
                                        <FeaturesText $fontSize="16px">Fully customizable components that adapt seamlessly to your design needs, ensuring flexibility and consistency across your projects.</FeaturesText>
                                    </TitleAndText>

                                    {/* Explicação/Representação/Demonstração */}
                                    <FeatureDemo>
                                        <FeatureButton $backgroundColor="var(--light)">Button</FeatureButton>
                                        <FeatureButton $backgroundColor="var(--pure)">Button</FeatureButton>
                                        <FeatureButton $backgroundColor="var(--medium)">Button</FeatureButton>
                                        <FeatureButton $backgroundColor="var(--dark)">Button</FeatureButton>
                                    </FeatureDemo>
                                    
                                </Feature>
                            </LargeFeature>

                            {/* Feature 2 - Reusable */}
                            <SmallFeature>
                                <Feature>

                                    {/* Título e o Texto */}
                                    <TitleAndText>
                                        <TitleH3>Reusable</TitleH3>
                                        <FeaturesText $fontSize="16px">Reusable components designed to streamline development, reducing redundancy and enhancing efficiency in every project.</FeaturesText>
                                    </TitleAndText>

                                    {/* Explicação/Representação/Demonstração */}
                                    <FeatureDemo>

                                        {/* Feature Example - Home */}
                                        <FeatureExample>
                                            <Text $fontSize="16px" $fontWeight="var(--fw-medium)">Home</Text>
                                            <CheckboxContainer>
                                                <Text $fontSize="12px" $textColor="var(--medium)">Checkbox</Text>
                                                <input type="checkbox" />
                                                <CheckboxCheckmark></CheckboxCheckmark>
                                            </CheckboxContainer>
                                        </FeatureExample>

                                        {/* Ícone de Arrow Right */}
                                        <ArrowRight size={24} style={{marginRight: 10}} />

                                        {/* Feature Example - About Us */}
                                        <FeatureExample>
                                            <Text $fontSize="16px" $fontWeight="var(--fw-medium)">About Us</Text>
                                            <CheckboxContainer>
                                                <Text $fontSize="12px" $textColor="var(--medium)">Checkbox</Text>
                                                <input type="checkbox" />
                                                <CheckboxCheckmark></CheckboxCheckmark>
                                            </CheckboxContainer>
                                        </FeatureExample>

                                    </FeatureDemo>

                                </Feature>
                            </SmallFeature>

                        </FeaturesRow>

                        {/* 2° Row de Features */}
                        <FeaturesRow>
                            
                            {/* Feature 3 - Large Quantity of Options */}
                            <SmallFeature>
                                <Feature>

                                    {/* Título e o Texto */}
                                    <TitleAndText>
                                        <TitleH3>Large Quantity of Options</TitleH3>
                                        <FeaturesText $fontSize="16px">A vast selection of components and variations to cover all your interface needs, from simple elements to advanced layouts.</FeaturesText>
                                    </TitleAndText>

                                    {/* Explicação/Representação/Demonstração */}
                                    <FeatureDemo>
                                        
                                        {/* Button */}
                                        <FeatureButton $backgroundColor="var(--pure)">Button</FeatureButton>

                                        {/* Radio Button */}
                                        <RadioButtonContainer>
                                            <Text $fontSize="12px" $textColor="var(--pure)">Radio Button</Text>
                                            <input type="radio" />
                                            <RadioButtonCheckmark></RadioButtonCheckmark>
                                        </RadioButtonContainer>

                                        {/* Checkbox */}
                                        <CheckboxContainer style={{top: -2}}>
                                            <Text $fontSize="12px" $textColor="var(--medium)">Checkbox</Text>
                                            <input type="checkbox" />
                                            <CheckboxCheckmark></CheckboxCheckmark>
                                        </CheckboxContainer>

                                    </FeatureDemo>

                                </Feature>
                            </SmallFeature>

                            {/* Feature 4 - Beautiful Design */}
                            <LargeFeature>
                                <Feature>

                                    {/* Título e o Texto */}
                                    <TitleAndText>
                                        <TitleH3>Beautiful Design</TitleH3>
                                        <FeaturesText $fontSize="16px">Stunning, professionally crafted designs that elevate your UI and deliver a polished user experience effortlessly.</FeaturesText>
                                    </TitleAndText>

                                    {/* Explicação/Representação/Demonstração */}
                                    <FeatureDemo>

                                        {/* Button */}
                                        <FeatureButton $backgroundColor="var(--pure)">Beautiful</FeatureButton>
                                        
                                        {/* Checkbox */}
                                        <CheckboxContainer style={{top: -2}}>
                                            <Text $fontSize="12px" $textColor="var(--medium)">Design</Text>
                                            <input type="checkbox" checked readOnly />
                                            <CheckboxCheckmark></CheckboxCheckmark>
                                        </CheckboxContainer>

                                    </FeatureDemo>

                                </Feature>
                            </LargeFeature>

                        </FeaturesRow>

                        {/* CTA Features Text */}
                        <div className="col-md-7 text-center">
                            <Text $fontWeight="var(--bold)">Discover a glimpse of what we offer! These are just a few of our features — take a look and explore the <PurpleLink>full library</PurpleLink> to unlock even more possibilities.</Text>
                        </div>

                    </Features>
                </Container>
            </section>

            {/* Technologies Section */}
            <section id="technologies-section">
                <ContainerFluid $backgroundColor="var(--secondary-dark)">

                    <Container>
                        <Row>

                            {/* Conteúdo da Technologies */}
                            <FlexCenterDiv $padding="100px 0px">
                                <TechnologiesContent>

                                    {/* Title e Text */}
                                    <TitleH1 $fontSize="40px" $textColor="var(--gray)">Technologies used to build the Components</TitleH1>
                                    <Text $fontSize="16px" $textColor="var(--gray)">Explore the powerful technologies behind our components, crafted with the best tools for seamless performance and scalability.</Text>

                                    {/* Technologies Badges */}
                                    <TechnologiesBadges>
                                        
                                        {/* React Badge */}
                                        <Badge href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                                            <FaReact size={24} color={"var(--pure)"} />
                                            <Text $fontSize="16px" $textColor="var(--pure)">React</Text>
                                        </Badge>

                                        {/* Styled Components Badge */}
                                        <Badge href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">
                                            💅
                                            <Text $fontSize="16px" $textColor="var(--pure)">Styled Components</Text>
                                        </Badge>

                                        {/* Bootstrap Badge */}
                                        <Badge href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                                            <FaBootstrap size={24} color={"var(--pure)"} />
                                            <Text $fontSize="16px" $textColor="var(--pure)">Bootstrap</Text>
                                        </Badge>
                                        
                                    </TechnologiesBadges>

                                </TechnologiesContent>
                            </FlexCenterDiv>
                            
                        </Row>
                    </Container>

                </ContainerFluid>
            </section>

            {/* Do it your way Section */}
            <section id="do-it-your-way-section">
                <DoItYourWayContainerFluid>

                    <Container>
                        
                        {/* Título de Feel Free */}
                        <LineTitle>
                            <TitleH2>FEEL FREE</TitleH2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="12" viewBox="0 0 56 12" fill="none">
                                <path d="M55.7735 6L50 0.226497L44.2265 6L50 11.7735L55.7735 6ZM0 7H50V5H0V7Z" fill="#B54BD2"/>
                            </svg>
                        </LineTitle>

                        {/* Do it your way Content */}
                        <DoItYourWayContent>

                            {/* Call to Action Content */}
                            <CTAContent>
                                <TitleH1>Do it your way!</TitleH1>
                                <Text $fontSize="16px">With our flexible components, you have the freedom to design exactly how you envision. Customize, tweak, and build with endless possibilities to match your unique style and needs.</Text>
                                <CTAButton>
                                    Find out how
                                    <ArrowRight size={24} style={{marginLeft: 4}} className="cta-button-icon" />
                                </CTAButton>
                            </CTAContent>

                            {/* Laptop Image */}
                            <LaptopDiv>
                                <LaptopImage src={laptop} alt="Laptop Image" />
                            </LaptopDiv>

                        </DoItYourWayContent>

                    </Container>

                </DoItYourWayContainerFluid>
            </section>

        </main>

        {/* Importação do Footer */}
        <Footer />

    </>

}

// Exportando o componente Home
export default Home;