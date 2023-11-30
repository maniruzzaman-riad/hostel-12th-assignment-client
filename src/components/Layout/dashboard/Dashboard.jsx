import { NavLink, Outlet } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { FaUsersGear, FaBowlFood } from "react-icons/fa6";
import { MdUpcoming, MdFastfood, MdSetMeal, MdOutlineEditNote } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className="flex max-w-screen-xl mx-auto">
            <div className="w-60 min-h-screen bg-pink-500">
                <ul className="menu p-4">
                    <li><NavLink to="/"> <FaHome />Home</NavLink></li>
                    <li><NavLink to="/dashboard/adminProfile"> <ImProfile />Admin Profile</NavLink></li>
                    <li><NavLink to="manageUser"> <FaUsersGear />Manage Users</NavLink></li>
                    <li><NavLink to="/dashboard/addMeal"> <MdSetMeal />Add Meal</NavLink></li>
                    <li><NavLink to="allMeal"> <MdFastfood />All Meals</NavLink></li>
                    <li><NavLink to="reviews"> <MdOutlineEditNote />All reviews</NavLink></li>
                    <li><NavLink to="serveMeal"> <FaBowlFood />serve meals</NavLink></li>
                    <li><NavLink to="upcoming"> <MdUpcoming />Upcoming meals</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;