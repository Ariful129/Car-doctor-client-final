import { Link, NavLink } from "react-router-dom";
import logo from '../assets/icons/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    //from Cntex API
    const { user, logOut } = useContext(AuthContext);
    console.log('My Name is ', user)


    const handleSignOut = () => {
        logOut()
            .then(res => {
                console.log('Logout Successful', res)
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navItems = <>
        <li ><NavLink  to="/">Home</NavLink> </li>

        <div className="dropdown dropdown-hover ">
            <label tabIndex={0} className="btn  ml-2 mr-2 hover:bg-sky-500">Add New</label>
            <ul tabIndex={0} className="lg:dropdown-content z-[1] menu p-4 shadow  bg-amber-600 lg:bg-base-100 rounded-box w-48">
                <li> <NavLink to="/addproduct">Add product</NavLink> </li>
                <li> <NavLink to="/addservice">Add Service</NavLink> </li>
            </ul>
        </div>

        {/* <li> <NavLink to="/addproduct">Add product</NavLink> </li>
        <li> <NavLink to="/addservice">Add Service</NavLink> </li> */}

        {user && <>

            <div className="dropdown dropdown-hover mr-2">
                <label tabIndex={0} className="btn px-6 hover:bg-sky-500">Cart</label>
                <ul tabIndex={0} className="lg:dropdown-content z-[1] menu p-4 shadow  bg-amber-600 lg:bg-base-100  rounded-box w-48">
                   <li><NavLink to="/bookings">My Cart</NavLink></li>
                   <li><NavLink to="/myproduct">My Product</NavLink></li>
                </ul>
            </div>
            {/* <li><NavLink to="/bookings">My Cart</NavLink></li>
            <li><NavLink to="/myproduct">My Product</NavLink></li> */}
        </>
        }

        {user && user.email === 'admin@gmail.com' && (
            <li><NavLink to="/admin" >Admin</NavLink></li>
        )}


        {user ?
            <li><button   onClick={handleSignOut}>LogOut</button></li>
            :
            <li> <NavLink  to="/login">Login</NavLink> </li>
        }



        {/* {user?.email ? <>
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
        </>
            : <li> <Link to="/login">Login</Link> </li>
        } */}
    </>





    return (
        <div className="navbar bg-base-100 h-22 mb-1 p-4 rounded-xl font-bold ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="h-[55px]" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex " >
                <ul className="menu text-xm menu-horizontal px-1 lg:items-center" >
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <p className="mr-2 font-thin">
                    {
                        user && <span className="mr-2  text-green-600 font-bold">{user.displayName}</span>
                    }
                </p>
                <a href="https://www.cuet.ac.bd" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline btn-warning">Appointment</button>
                </a>

            </div>
        </div>
    );
};

export default Navbar;