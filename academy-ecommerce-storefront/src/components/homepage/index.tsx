import IntroSection from "./sections/intro-section";
import Partners from "./sections/partners";
import BestSales from "./sections/BestSales";
import Deals from "./sections/deals";

const Home = () => {
    return (
        <div className="main">
            <IntroSection />
            <BestSales />
            <Deals />
            <Partners />
            
        </div>
    );
}

export default Home;