import Banner from "../../Sheard/Banner";
import Faq from "./Faq";
import Gallery from "./Gallery";
import MealCategory from "./MealCategory";
import Membership from "./Membership";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Membership></Membership>
            <MealCategory></MealCategory>
            <Gallery></Gallery>
            <Faq></Faq>
        </div>
    );
};

export default Home;