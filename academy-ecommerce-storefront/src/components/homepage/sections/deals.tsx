import { SubTitle, Divider, SubDescription, Container, OrizontalContainer } from '../styledComp/styledComponents'
import "../css/style.css";
import dealAzzaro from '../images/dealAzzaro.jpg'
import dealCreed from '../images/dealCreed.jpg'
import { Link } from 'react-router-dom';

const Deals = () => {
    return (
        <Container>
            <SubTitle>NOILE REDUCERI SI OFERTE</SubTitle>
            <Divider />
            <SubDescription>Profita de noile oferte aferente lunii Ianuarie si ofera-le un cadou celor dragi tie.
            </SubDescription>
            <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/produse"
            >
            <OrizontalContainer>
                <Container className='container-best-deals'>
                     <img src={dealAzzaro} alt="Oferta Azzaro" className='deal-img azzaro'/>
                </Container>
                <Container className='container-best-deals'>
                    <img src={dealCreed} alt="Oferta Creed" className='deal-img creed'/>
                </Container>
            </OrizontalContainer>
            </Link>
        </Container>

    );

}

export default Deals;