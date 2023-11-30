import useAllMeal from "../../../Hooks/useAllMeal";


const AllMeal = () => {
    const [meals] = useAllMeal()

    const handleUpdate =()=>{

    }

    const handleDelete = () =>{

    }

    const handleDetails = () =>{
        
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Like</th>
                            <th>Review</th>
                            <th>Provider</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            meals.map((item,i)=><tr key={i}>
                            <th>{item.meal_title}</th>
                            <td>{item?.likes}</td>
                            <td>{item?.reviews.length}</td>
                            <td>{item?.distributor_name}</td>
                            <th>
                                <button onClick={handleUpdate} className="btn btn-ghost btn-xs">Update</button>
                            </th>
                            <th>
                                <button onClick={handleDelete} className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                            <th>
                                <button onClick={handleDetails} className="btn btn-ghost btn-xs">Details</button>
                            </th>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllMeal;