import styled from "styled-components";
import { cores } from "../../styles";

import hero_perfil from "../../assets/images/hero_perfil.png";

export const HeroContainer = styled.div`
width: 100%;
height: 280px;
display: block;
background-repeat: no-repeat;
background-size: cover;
position: relative;
background-image: url(${hero_perfil});

&::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: "";
}

@media (max-width: 768px) {
    height: 240px;
}`;

export const ContainerHero = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
padding: 24px 0;
position: relative;
z-index: 1;
max-width: 1024px;
margin: 0 auto;

@media (max-width: 1024px) {
    padding: 24px 16px;
}`

export const Categoria = styled.h4`
font-size: 32px;
font-weight: 100;
color: ${cores.branco};

@media (max-width: 1024px) {
    margin-left: 0; 
    font-size: 32px; 
};

@media (max-width: 768px) {
    margin-left: 0; 
    font-size: 24px; 
};

@media (max-width: 480px) {
    font-size: 20px;
}`;

export const NomeRestaurante = styled.h3`
font-size: 32px;
font-weight: 900;
color: ${cores.branco};

@media (max-width: 1024px) {
    margin-left: 0; 
    font-size: 32px; 
};

@media (max-width: 768px) {
    margin-left: 0; 
    font-size: 28px;
};

@media (max-width: 480px) {
    font-size: 24px;
}`;