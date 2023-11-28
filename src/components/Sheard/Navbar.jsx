import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    console.log(user);

    const MenuItem = <>
        <Link><li><a>Home</a></li></Link>
        <Link><li><a>Meals</a></li></Link>
        <Link><li><a>Upcoming Meals</a></li></Link>

    </>

    const handleLogOut =()=>{
        logOutUser()
        .then()
        .catch()
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                MenuItem
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            MenuItem
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li className="text-3xl"><Link>{user?.displayName}</Link></li>
                                    <li className="text-3xl"><Link>Dashboard</Link></li>
                                    <li><button onClick={handleLogOut} className="btn">Logout</button></li>
                                </ul>
                            </div>
                        </> 
                        : 
                        <><Link to="/login"><a className="btn">Join US</a></Link></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;