import useAllMeal from "../../../Hooks/useAllMeal";


const Reviews = () => {
    const [meals] = useAllMeal()

    const handleDelete = () =>{

    }

    const handleView = () =>{

    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Like</th>
                            <th>Reviews</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                {meals?.title}
                            </td>
                            <td>
                                {meals?.author}
                            </td>
                            <td>
                                {meals?.email}
                            </td>
                            <th>
                                <button onClick={handleDelete} className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                            <th>
                                <button onClick={handleView} className="btn btn-ghost btn-xs">View</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Reviews;