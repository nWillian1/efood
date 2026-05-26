import { HeaderContainer, TituloHeader, LinksContainer, LinkRestaurantes, CarrinhoTexto} from "./style";
import logo_efood from "../../assets/images/logo_efood.png";

type Props = {
    tipo?: 'home' | 'perfil';
}

const Header = ({ tipo = 'home' }: Props) => {
    if(tipo === 'perfil') {
        return (
            <HeaderContainer tipo={tipo}>
                <LinksContainer className="container">
                    <LinkRestaurantes href="#">Restaurantes</LinkRestaurantes>
                    <img src={logo_efood} alt="Efood" />
                    <CarrinhoTexto>0 produto(s) no carrinho</CarrinhoTexto>
                </LinksContainer>
            </HeaderContainer>
        );
    }

    return (
        <HeaderContainer tipo={tipo}>
            <img src={logo_efood} alt="Efood" />
            <TituloHeader>Viva experiências gastronômicas no conforto da sua casa</TituloHeader>
        </HeaderContainer>
    )
}

export default Header;
