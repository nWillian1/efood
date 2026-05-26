import { GridContainer, CardContainer, FotoPrato, TituloPrato, DescricaoPrato, BotaoAdicionar } from "./style";
import card_perfil from "../../../assets/images/card_perfil.png";

type Props = {
foto: string;
nome: string;
descricao: string;
}

const listaPratos = [
    {
    id: 1,
    foto: card_perfil,
    nome: "Pizza Marguerita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
    },
    {
    id: 2,
    foto: card_perfil,
    nome: "Pizza Marguerita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
    },
    {
    id: 3,
    foto: card_perfil,
    nome: "Pizza Marguerita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
    },
    {
    id: 4,
    foto: card_perfil,
    nome: "Pizza Marguerita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
    },
    {
    id: 5,
    foto: card_perfil,
    nome: "Pizza Marguerita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
    },
    {
    id: 6,
    foto: card_perfil,
    nome: "Pizza Marguerita",
    descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
    }
];

function CardPrato({foto, nome, descricao}: Props) {
    return (
        <CardContainer>
            <FotoPrato src={foto} alt={nome} />
            <TituloPrato>{nome}</TituloPrato>
            <DescricaoPrato>{descricao}</DescricaoPrato>
            <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
        </CardContainer>
    );
}

function ListaPratos() {
    return (
        <div className="container">
            <GridContainer>
                {listaPratos.map((prato) =>
                    <CardPrato
                    key={prato.id}
                    foto={prato.foto}
                    nome={prato.nome}
                    descricao={prato.descricao}
                    />
                )}
            </GridContainer>
        </div>
    )
}

export default ListaPratos;