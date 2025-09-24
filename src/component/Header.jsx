import React, { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
// import { toast } from 'react-toastify';
import { ProductContext } from "../context/ProductContext";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useContext(AuthContext);
  const { cartItems } = useContext(ProductContext);
  const cartCount = cartItems?.products?.length || 0;
  const isAuthenticated = state?.accessToken !== null;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("isAuth", state?.accessToken);
  }, [state]);
  const logout = (e) => {
    try {
      e.preventDefault();
      localStorage.removeItem("auth-Token");
      dispatch({ type: "setToken", payload: null });
      navigate("/login");
      toast.success("Logout successful");
    } catch (error) {
      console.error(error);
    }
  };
  //    return (
  //   <>
  //      <div className='header md:hidden p-5 bg-black text-white flex justify-between md:justify-around items-center gap-6 font-poppins relative'>
  //         <div className='logo'>
  //           <h1 className=' font-bold text-3xl font-serif'><Link to="/">PeeDELLs</Link></h1>
  //         </div>

  //       <button onClick={() => setIsOpen(true)} className="md:hidden absolute right-5 top-6">
  //         <GiHamburgerMenu size={28} />
  //       </button>

  //     <div
  //       className={`fixed top-0 left-0 h-full w-64 bg-[#0B0500] text-white transform ${
  //         isOpen ? "translate-x-0" : "-translate-x-full"
  //       } transition-transform duration-300 ease-in-out z-50 md:hidden`}>
          
  //       <div className="flex justify-between items-center p-5 border-b border-gray-700">
  //         <h1 className="font-serif text-xl">
  //           <Link to="/" onClick={() => setIsOpen(false)}>
  //             PeeDELLs
  //           </Link>
  //         </h1>
  //       </div>
  //       <ul className="flex flex-col gap-4 p-5">
  //         <li className="hover:border-b hover:duration-100"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
  //         <li className="hover:border-b hover:duration-100"><Link to="/products" onClick={() => setIsOpen(false)}>Shop</Link></li>
  //         <li className="hover:border-b hover:duration-100"><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
  //         <li className="hover:border-b hover:duration-100"><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
  //         {/* <li className="hover:border-b hover:duration-100"><Link to="/login" onClick={() => setIsOpen(false)}>Login<IoMdLogIn size={25} /></Link></li> */}
  //       </ul>
  //       {/* Cart */}
  //       <div className="p-5 border-t border-gray-700">
  //         <Link to="/cart" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
  //           <div className="relative">
  //             <FaShoppingCart size={18} />
  //             <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
  //               {cartCount}
  //             </span>
  //           </div>
  //           <span>Cart</span>
  //         </Link>
  //       </div>
  //       <div className=" pl-10 search flex justify-center items-center gap-2 border-b border-gray-100 w-[70%]">
  //         <input type="text" className="outline-none border-none bg-transparent flex-5"  placeholder="Search..."/>
  //         <span>
  //           <CiSearch size={18} />
  //         </span>
  //         </div>
  //     </div>

  //     {isOpen && (
  //       <div
  //         className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
  //         onClick={() => setIsOpen(false)}
  //       ></div>
  //     )}
  //     </div>

  //     <div className="hidden md:flex header p-5 bg-[#0B0500] text-white justify-around items-center gap-4">
  //       <div className="logo">
  //         <h1 className="font-serif">
  //           <Link to="/">PeeDELLs</Link>
  //         </h1>
  //       </div>
  //       <div className='nav hidden md:flex'>
  //         <ul className=' flex gap-4 justify-around items-center'>
  //           <li className='hover:border-b hover:translate-x-0.5 hover:duration-200'><Link to="/">Home</Link></li>
  //           <li className='hover:border-b hover:translate-x-0.5 hover:duration-200'><Link to="/Products">Shop</Link></li>
  //           <li className='hover:border-b hover:translate-x-0.5 hover:duration-200'><Link to="/AboutUs">About</Link></li>
  //           <li className='hover:border-b hover:translate-x-0.5 hover:duration-200'><Link to="/Contact">Contact</Link></li>
  //        </ul>
  //       </div>
  //       <div className="flex justify-between items-center gap-2">
  //         <div className="search flex justify-center items-center gap-2 border-b border-gray-100">
  //           <span>
  //             <CiSearch size={18} />
  //           </span>
  //           <input
  //             type="text"
  //             className="outline-none border-none"
  //             placeholder="Search..."
  //           />
  //         </div>
  //         <Link to="/cart">
  //           <div className="relative">
  //             <FaShoppingCart size={18} />
  //             <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
  //               {cartCount}
  //             </span>
  //           </div>
  //         </Link>
  //         {isAuthenticated ? (
  //           <Link onClick={logout} className="text-white px-3 hover:text-gray-300">
  //             Logout
  //           </Link>
  //         ) : (
  //           <Link to="login" className="text-white px-3 hover:text-gray-300">
  //             <IoMdLogIn size={25} /> Login
  //           </Link>
  //         )}
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className="header p-5 bg-black text-white flex justify-between md:justify-around items-center gap-6 font-poppins relative">
        <div className="logo">
          <h1 className=" font-bold text-3xl font-serif">
            <Link to="/">PeeDELLs</Link>
          </h1>
        </div>

        <div className="nav hidden md:flex">
          <ul className=" flex gap-4 justify-around items-center">
            <li className="hover:border-b hover:translate-x-0.5 hover:duration-200"><Link to="/">Home</Link></li>
            <li className="hover:border-b hover:translate-x-0.5 hover:duration-200"><Link to="/Products">Shop</Link></li>
            <li className="hover:border-b hover:translate-x-0.5 hover:duration-200"><Link to="/AboutUs">About</Link></li>
            <li className="hover:border-b hover:translate-x-0.5 hover:duration-200"><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="search hidden md:flex justify-center items-center gap-2 border-b border-gray-100">
            <span><CiSearch size={18} /></span>
            <input type="text" placeholder="Search..." className="border-none outline-none bg-transparent" />
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart size={18} />
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              </div>
            </Link>
          </div>
        </div>
        {isAuthenticated ? (
          <>
            <div className="hidden md:flex justify-between items-center gap-7">
              <Link onClick={() => {logout();}} className="flex items-center gap-1">Logout<IoIosContact size={25} /></Link>
            </div>
          </>
        ) : (
          <div className="hidden md:flex justify-between items-center gap-7">
            <Link to="/Login" className="flex items-center gap-1">Login <IoMdLogIn size={25} /></Link>
            <Link to="/Register" className="flex items-center gap-1">Register <IoIosContact size={25} /></Link>
          </div>
        )}
        <div
          className="md:hidden absolute right-4 top-6 cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}> <GiHamburgerMenu size={28} />
        </div>
        

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-800 ease-in-out z-50 md:hidden`}>
            
            <div className="flex justify-between items-center p-6  border-gray-100">
              <div className="pl-5 search flex justify-center items-center border-b border-gray-100 w-48">
                <input type="text" className="outline-none border-none bg-transparent flex-5"  placeholder="Search..."/>
                    {/* <span><CiSearch size={18} /></span> */}
             </div>
            </div>


          <div className="bg-black p-5 flex flex-col gap-10 border-y border-gray-700">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:border-b hover:translate-x-0.5 hover:duration-200">Home</Link>
            <Link to="/Products" onClick={() => setIsOpen(false)} className="hover:border-b hover:translate-x-0.5 hover:duration-200">Shop</Link>
            <Link to="/AboutUs" onClick={() => setIsOpen(false)} className="hover:border-b hover:translate-x-0.5 hover:duration-200">About</Link>
            <Link to="/Contact" onClick={() => setIsOpen(false)} className="hover:border-b hover:translate-x-0.5 hover:duration-200">Contact</Link>
            <Link to="/Login" onClick={() => setIsOpen(false)} className="hover:border-b hover:translate-x-0.5 hover:duration-200 flex items-center gap-1" >Login <IoMdLogIn size={25} /></Link>

              <Link to="/cart" className="flex items-center gap-2 hover:border-b hover:translate-x-0.5 hover:duration-200" onClick={() => setIsOpen(false)}>
               <span>Cart</span>
                <div className="relative">
                  <FaShoppingCart size={25} />
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                </div>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
