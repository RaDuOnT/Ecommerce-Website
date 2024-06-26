import "../css/style.css";
import { Container } from "../styledComp/styledComponents";
import styled from "styled-components";
import wave from "../images/wave.svg"
import diorBanner from "../images/banner.webp";

const Title = styled.h1`
 color: white;
 
 @media (max-width: 425px){
    font-size: 24px;
 }
`

const BannerImage = styled.img`
    width: 30%;
    @media (max-width: 768px) {
        width: 75%;
    }
`
const Link = styled.a`
    padding: 8px 48px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    background-color: #2F4858;
    color: white;
    cursor: pointer;
    text-decoration:none;
    margin: 32px 0;
`
const IntroSection = () => {
    return (
        <Container className='banner-container'>
                <img src={diorBanner} alt="dior banner" 
                  className="banner-image" width={'100%'}/>
                  <Container className="wave-container"><img src={wave} alt="" width={`100%`}/></Container>
                  
                   <Title className="banner-title">NOUA COLECTIE DE PARFUMURI<br />MARCA CHRISTIAN DIOR</Title>
        </Container>
    );
}

export default IntroSection;