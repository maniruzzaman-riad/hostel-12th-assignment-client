import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../Sheard/SectionTitle';
import useAllMeal from '../../Hooks/useAllMeal';
import MealCard from '../../Sheard/MealCard';

const MealCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [meals] = useAllMeal()

    const breakfast = meals.filter(item => item.meal_category === "Breakfast")
    const lunch = meals.filter(item => item.meal_category === "Lunch")
    const dinner = meals.filter(item => item.meal_category === "Dinner")
    return (
        <div>
            <SectionTitle title="Choose Your meal"></SectionTitle>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-7'>
                        {
                            breakfast.map((mealData, i) => <MealCard key={i} mealData={mealData}></MealCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-7'>
                        {
                            lunch.map((mealData, i) => <MealCard key={i} mealData={mealData}></MealCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-7'>
                        {
                            dinner.map((mealData, i) => <MealCard key={i} mealData={mealData}></MealCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MealCategory;