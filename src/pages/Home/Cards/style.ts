import styled from "styled-components";
import { cores } from "../../../styles";

export const ContainerImagem = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    display: block;
  }
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.div`
  background-color: ${cores.coral};
  color: ${cores.begeDestaque};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
  display: inline-block;
`;

export const SecaoCards = styled.section`
  background-color: ${cores.begeClaro};
  padding: 80px 0;
  width: 100%;

@media (max-width: 1024px) {
    column-gap: 32px;
    padding: 40px 16px;
  }`;

export const GridContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: 768px) {
  grid-template-columns: repeat(2, 1fr); 
  column-gap: 24px;
  row-gap: 32px;
  padding: 40px 16px; 
};

@media (max-width: 480px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
    padding: 32px 16px;
  }`;


export const CardContainer = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.coral};
  width: 100%;
  max-width: 472px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

@media (max-width: 768px) {
  width: 100%; 
  box-sizing: border-box;
};
@media (max-width: 480px) {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}`;

export const TituloSecao = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.coral};
`;

export const DescricaoCard = styled.p`
  margin: 16px 8px 16px 8px;
  font-size: 14px;
  color: ${cores.coral};
  font-weight: 400;
  line-height: 22px;
`;

export const BotaoCard = styled.button`
  width: 82px;
  height: 24px;
  margin-left: 8px;
  margin-bottom: 8px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  background-color: ${cores.coral};
  color: ${cores.begeDestaque};
  cursor: pointer;
`;

export const CabecalhoCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 7px 0 7px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-size: 18px;
      font-weight: 700;
      color: ${cores.coral};
      line-height: 1;
    }

    img {
      width: 21px;
      height: 20px;
      display: block;
      transform: translateY(-1px);
    }
  }
`;
