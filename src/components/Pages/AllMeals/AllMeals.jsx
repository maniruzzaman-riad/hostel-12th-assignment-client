import useAllMeal from "../../Hooks/useAllMeal";
import MealCard from "../../Sheard/MealCard";


const AllMeals = () => {
    const [meals] = useAllMeal()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    meals.map((mealData, i) => <MealCard key={i} mealData={mealData}></MealCard>)
                }
            </div>
        </div>
    );
};

export default AllMeals;