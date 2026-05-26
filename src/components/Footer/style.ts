import styled from "styled-components";
import { cores } from "../../styles";

export const FooterContainer = styled.footer`
background-color: ${cores.begeDestaque};
padding: 40px 0;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

@media (max-width: 768px) {
    padding: 40px 16px; 
}`;

export const RedesSociais = styled.div`
    display: flex;
    gap: 8px;
    margin: 32.5px 0 80px 0; 

    img {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }

@media (max-width: 480px) {
    margin: 24px 0 40px 0;
}`;

export const TextoFooter = styled.p`
    font-size: 10px;
    font-weight: 400;
    color: ${cores.coral};
    max-width: 480px;
    line-height: 14px;

@media (max-width: 1024px) {
    font-size: 16px;       
    line-height: 18px;    
    max-width: 80%;        
};

@media (max-width: 768px) {
    font-size: 13px;       
    line-height: 18px;    
    max-width: 80%;        
};

@media (max-width: 480px) {
    max-width: 100%;
    font-size: 11px; 
}`;