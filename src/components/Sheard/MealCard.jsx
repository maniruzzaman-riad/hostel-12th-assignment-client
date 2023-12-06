

const MealCard = ({mealData}) => {
    const {meal_title,image,price,rating} = mealData;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="food" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{meal_title}</h2>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealCard;