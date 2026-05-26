import styled from "styled-components";
import fundoHeader from "../../assets/images/Vector_header.png";
import { cores } from "../../styles";

type ContainerProps = {
    tipo: 'home' | 'perfil';
}

export const HeaderContainer = styled.header<ContainerProps>`
    width: 100%;
    height: ${(props) => (props.tipo === 'perfil' ? '186px' : '384px')};
    background-image: url(${fundoHeader});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: ${(props) => (props.tipo === 'perfil' ? 'row' : 'column')};
    align-items: center;
    justify-content: ${(props) => (props.tipo === 'perfil' ? 'center' : 'space-between')};
    padding: 64px 0;

@media (max-width: 768px) {

    height: ${(props) => (props.tipo === 'perfil' ? 'auto' : '300px')};
    padding: 40px 0;
};

@media (max-width: 480px) {
    height: ${(props) => (props.tipo === 'perfil' ? 'auto' : '260px')};
    padding: 32px 0;
}`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1024px; 
    margin: 0 auto;

@media (max-width: 1024px) {
    padding: 0 16px;
}

@media (max-width: 768px) {
    padding: 0 24px;
};

@media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
    padding: 0 16px;
}`;

export const LinkRestaurantes = styled.a`
    color: ${cores.coral};
    font-weight: 900;
    font-size: 18px;
    text-decoration: none;
`;

export const CarrinhoTexto = styled.span`
    color: ${cores.coral};
    font-weight: 900;
    font-size: 18px;
`;

export const TituloHeader = styled.h1`
    color: ${cores.coral};
    max-width: 539px;
    height: 84px;
    text-align: center;
    font-size: 36px;
    font-weight: 900;
    line-height: 100%;

@media (max-width: 480px) {
    font-size: 32px;
}`
