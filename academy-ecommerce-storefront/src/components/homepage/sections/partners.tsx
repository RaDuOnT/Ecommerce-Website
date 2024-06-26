import {SubTitle, Divider, SubDescription, Container, OrizontalContainer} from '../styledComp/styledComponents'
import partnersImg1 from '../images/partners1.png'
import partnersImg2 from '../images/partners2.png'

const Partners = () => {
    return (
        <Container>
            <SubTitle>PARTENERI DE INCREDERE</SubTitle>
            <Divider />
            <SubDescription>Colaboram cu cei mai mari producatori de parfumuri, cum ar fi Tom Ford, Dior, Gucci, Loewe, 
                Armani, Bvlgari si multi altii.
            </SubDescription>
            <OrizontalContainer>
                <Container>
                     <img src={partnersImg1} alt="Parteneri" className='deal-img azzaro'/>
                </Container>
                <Container>
                    <img src={partnersImg2} alt="Parteneri" className='deal-img creed'/>
                </Container>
            </OrizontalContainer>
        </Container>
    );
}

export default Partners;