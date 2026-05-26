import styled from "styled-components";
import { cores } from "../../../styles";

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(3, 320px);
justify-content: center;
gap: 32px;
padding: 80px 0;
background-color: ${cores.begeClaro};

@media (max-width: 1024px) {
    column-gap: 24px;    
    padding: 56px 16px;  
}

@media (max-width: 768px) {
    grid-template-columns: repeat(2, 320px);
    gap: 24px;
    padding: 40px 0;
}

@media (max-width: 480px) {
    grid-template-columns: 320px;
    gap: 16px;
    padding: 32px 0;
}`;

export const CardContainer = styled.div`
background-color: ${cores.coral};
padding: 8px;
display: flex;
flex-direction: column;
box-sizing: border-box;`

export const FotoPrato = styled.img`
width: 100%;
height: 167px;
object-fit: cover;
display: block;`

export const TituloPrato = styled.h3`
font-size: 16px;
font-weight: 900;
color: ${cores.begeDestaque};
margin-top: 8px;
margin-bottom: 8px;`

export const DescricaoPrato = styled.p`
font-size: 14px;
line-height: 22px;
color: ${cores.begeDestaque};
margin-bottom: 8px;
flex: 1; 
`

export const BotaoAdicionar = styled.button`
background-color: ${cores.begeDestaque};
color: ${cores.coral};
border: none;
padding: 4px 0;
font-size: 14px;
font-weight: 700;
cursor: pointer;
width: 100%;
transition: opacity 0.2s ease;

    &:hover {
    opacity: 0.9;
    }
`