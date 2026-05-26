import { BotaoCard, CabecalhoCard, CardContainer, ContainerImagem, DescricaoCard, GridContainer, SecaoCards, Tag, TagsContainer, TituloSecao } from "./style";
import sushi from "../../../assets/images/sushi.png"
import tratoria from "../../../assets/images/tratoria.png"
import estrela from "../../../assets/images/estrela.png"

type Props = {
    capa: string;
    titulo: string;
    nota: string;
    descricao: string;
    destaque?: boolean;
    categoria: string;
}

function Card({ capa, titulo, nota, descricao, destaque, categoria }: Props) {
    return (
        <CardContainer>
            <ContainerImagem>
                <img src={capa} alt={titulo} />
                <TagsContainer>
                    {destaque && <Tag>Destaque da Semana</Tag>}
                    <Tag>{categoria}</Tag>
                </TagsContainer>
            </ContainerImagem>

            <CabecalhoCard>
            <TituloSecao>{titulo}</TituloSecao>
            <div>
                <span>{nota}</span>
                <img src={estrela} alt="Estrela" />
            </div>
            </CabecalhoCard>
            
            <DescricaoCard>{descricao}</DescricaoCard>
            <BotaoCard>Saiba mais</BotaoCard>
        </CardContainer>
    )
}

const listaRestaurantes = [
    {
        id: 1,
        titulo: "Hioki Sushi",
        nota: "4.9",
        descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.",
        capa: sushi,
        destaque: true,
        categoria: "Japonesa"
    },
    {
        id: 2,
        titulo: "La Dolce Vita Trattoria",
        nota: "4.6",
        descricao: "A Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
        capa: tratoria,
        destaque: false, 
        categoria: "Italiana"
    },
    {
        id: 3,
        titulo: "La Dolce Vita Trattoria",
        nota: "4.6",
        descricao: "A Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
        capa: tratoria,
        destaque: false, 
        categoria: "Italiana"
    },
    {
        id: 4,
        titulo: "La Dolce Vita Trattoria",
        nota: "4.6",
        descricao: "A Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
        capa: tratoria,
        destaque: false,
        categoria: "Italiana"
    },
    {
        id: 5,
        titulo: "La Dolce Vita Trattoria",
        nota: "4.6",
        descricao: "A Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
        capa: tratoria,
        destaque: false, 
        categoria: "Italiana"
    },
    {
        id: 6,
        titulo: "La Dolce Vita Trattoria",
        nota: "4.6",
        descricao: "A Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.",
        capa: tratoria,
        destaque: false, 
        categoria: "Italiana"
    },
]

function CardsList() {
return (
    <SecaoCards>
        <GridContainer>
            {listaRestaurantes.map((restaurante) => (
                <Card
                    key={restaurante.id}
                    capa={restaurante.capa}
                    titulo={restaurante.titulo}
                    nota={restaurante.nota}
                    descricao={restaurante.descricao}
                    destaque={restaurante.destaque}
                    categoria={restaurante.categoria}
                />
            ))}
        </GridContainer>
    </SecaoCards>
)
}

export default CardsList;