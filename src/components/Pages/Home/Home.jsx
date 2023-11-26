import Banner from "../../Sheard/Banner";
import MealCategory from "./MealCategory";
import Membership from "./Membership";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Membership></Membership>
            <MealCategory></MealCategory>
        </div>
    );
};

export default Home;