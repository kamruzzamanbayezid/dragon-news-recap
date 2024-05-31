import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import avatar from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
      const { user, logOut } = useContext(AuthContext);

      const navLinks = <>
            <li><NavLink
                  to='/'
                  className={({ isActive }) => isActive ? 'is-active' : 'is-not-active'}
            >Home</NavLink></li>
            <li><NavLink
                  to='/about'
                  className={({ isActive }) => isActive ? 'is-active' : 'is-not-active'}
            >About</NavLink></li>
            <li><NavLink
                  to='/career'
                  className={({ isActive }) => isActive ? 'is-active' : 'is-not-active'}
            >Career</NavLink></li>
            <li><NavLink
                  to='/register'
                  className={({ isActive }) => isActive ? 'is-active' : 'is-not-active'}
            >Register</NavLink></li>

      </>

      const handleLogOut = () => {
            logOut()
                  .then(() => {
                        toast.success('Successfully logged out!!')
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      return (
            <div className="navbar bg-base-100">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </div>
                              <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {navLinks}
                              </ul>
                        </div>

                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="flex items-center gap-10">
                              {navLinks}
                        </ul>
                  </div>
                  <div className="navbar-end">

                        <div className="dropdown dropdown-end">
                              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-2">
                                    <div className="w-12 rounded-full">
                                          <img tabIndex={0} alt="Tailwind CSS Navbar component" src={user?.photoURL ? user?.photoURL : avatar} />
                                    </div>
                              </div>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
                                    <li><a>{user?.displayName}</a></li>
                                    <li><a>{user?.email}</a></li>
                              </ul>
                        </div>
                        {
                              user ? <button onClick={handleLogOut} className="bg-[#403F3F] nav-btn">Log Out</button>
                                    :
                                    <Link to='/login'>
                                          <button className="bg-[#403F3F] nav-btn">Log In</button>
                                    </Link>
                        }
                  </div>
            </div>
      );
};

export default Navbar;