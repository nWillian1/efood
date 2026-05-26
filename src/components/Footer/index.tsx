import logo_efood from "../../assets/images/logo_efood.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/Twitter.png";

import { FooterContainer, RedesSociais, TextoFooter } from "./style";

function Footer() {
    return (
        <FooterContainer>
        <img src={logo_efood} alt="efood" />

        <RedesSociais>
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
        </RedesSociais>

        <TextoFooter>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </TextoFooter>
    </FooterContainer>
    )
}

export default Footer