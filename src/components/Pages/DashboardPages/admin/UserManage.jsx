import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const UserManage = () => {
    const { user } = useContext(AuthContext)

    const handleMakeAdmin = () =>{
        
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Membership</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                {user?.displayName}
                            </td>
                            <td>
                                {user?.email}
                            </td>
                            <td>{user?.submission}</td>
                            <th>
                                <button onClick={handleMakeAdmin} className="btn btn-ghost btn-xs">Make admin</button>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManage;