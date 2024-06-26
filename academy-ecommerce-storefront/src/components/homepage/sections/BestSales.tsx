import { SubTitle, Divider, SubDescription, Container, OrizontalContainer } from '../styledComp/styledComponents'
import { PerfumeList } from './dummyData/perfumes';
import { Link } from "react-router-dom";

interface Perfume {
    title?: string,
    description?: string,
    image?: string,
    rating?: string;
}


const BestSales = ({
    title, description, image, rating /// not used, at this moment data come from dummyData
}: Perfume) => {
    return (
        <Container id='produse'>
            <SubTitle>CELE MAI VANDUTE PARFUMURI</SubTitle>
            <Divider />
            <SubDescription>Statisticile arata ca aceste parfumuri sunt cele mai bine cumparate de catre clientii nostri.
            </SubDescription>
            <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/produse"
        >
          
        
            <OrizontalContainer>
                {PerfumeList.map((data,i) => { /// from dummy data
                    return (
                        <Container key={i} className='container-best-perfumes'>
                            <img src={data.image} alt="perfume" width="35%" />
                            <p className='perfume-card-title'>{data.title}</p>
                            <p className='perfume-card-description'>{data.description}</p>
                            <p className='perfume-card-rating'>{data.rating}<br/><br/>( ... recenzii )</p>
                        </Container>);
                })}
            </OrizontalContainer>
            </Link>
        </Container>
    );
}

export default BestSales;