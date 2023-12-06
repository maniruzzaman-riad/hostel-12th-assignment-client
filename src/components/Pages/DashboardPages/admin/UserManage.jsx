// import { useContext } from "react";
// import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useMealsSecure from "../../../Hooks/useMealsSecure";
import SectionTitle from "../../../Sheard/SectionTitle";
import Swal from "sweetalert2";


const UserManage = () => {
    // const { user } = useContext(AuthContext)
    const axiosSecure = useMealsSecure();

    const {data: users = [],refetch} = useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleMakeAdmin = (user) =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is now promoted as Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        
    }
    return (
        <div>
            <SectionTitle title="all users"></SectionTitle>
            <h2 className="ms-5 text-3xl font-semibold">total users : {users.length}</h2>
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
                        {
                            users.map(user=><tr key={user._id}>
                                <td>
                                    {user?.name}
                                </td>
                                <td>
                                    {user?.email}
                                </td>
                                <td>{user?.membership}</td>
                                <th>
                                    {user.role === 'admin' ? "Admin" : <button onClick={()=>handleMakeAdmin(user)} className="btn btn-outline btn-sm">Make admin</button>}
                                </th>
                            </tr>)
                        }
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManage;