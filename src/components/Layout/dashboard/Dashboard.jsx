import { NavLink, Outlet } from "react-router-dom";
import { ImProfile } from "react-icons/im";


const Dashboard = () => {
    return (
        <div className="flex max-w-screen-xl mx-auto">
            <div className="w-60 min-h-screen bg-pink-500">
                <ul className="menu p-4">
                    <li><NavLink to="/dashboard/adminProfile"> <ImProfile />Admin Profile</NavLink></li>
                    <li><NavLink> <ImProfile />Manage Users</NavLink></li>
                    <li><NavLink> <ImProfile />Add Meal</NavLink></li>
                    <li><NavLink> <ImProfile />All Meals</NavLink></li>
                    <li><NavLink> <ImProfile />All reviews</NavLink></li>
                    <li><NavLink> <ImProfile />serve meals</NavLink></li>
                    <li><NavLink> <ImProfile />Upcoming meals</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;