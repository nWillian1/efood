import { HeroContainer, ContainerHero, Categoria, NomeRestaurante } from "./style";

const Hero = () => {
    return (
        <HeroContainer>
            <ContainerHero className="container">
                <Categoria>Italiana</Categoria>
                <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
            </ContainerHero>
        </HeroContainer>
    )
}

export default Hero;