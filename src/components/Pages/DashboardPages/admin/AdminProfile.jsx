import { useContext } from "react";
import SectionTitle from "../../../Sheard/SectionTitle";
import { AuthContext } from "../../../Providers/AuthProvider";


const AdminProfile = () => {
    const {user} =useContext(AuthContext)
    return (
        <div>
            <SectionTitle title="Admin Profile"></SectionTitle>
            <div>
                <h2 className="px-5 text-3xl font-semibold my-4">Name: <span className="text-purple-800">{user.displayName}</span></h2>
                <p className="px-5 text-3xl font-semibold">Email: <span className="text-purple-800">{user.email}</span></p>
            </div>
        </div>
    );
};

export default AdminProfile;