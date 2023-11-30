import { useState } from "react";
import useAllMeal from "../../../Hooks/useAllMeal";


const RequestedMeals = () => {
    const [deliverd, setDeliverd] = useState(false);
    const [meals] = useAllMeal()

    const handleStatus = () => {
        setDeliverd(true);
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
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
                            <td>
                                {
                                    deliverd ? 'Deliverd' : "pending"
                                }
                            </td>
                            <th>
                                <button onClick={handleStatus} className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default RequestedMeals;