import logo from '../assets/Logoo.png';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    
    const storedUsername = localStorage.getItem("username");  
    const isLoggedIn = localStorage.getItem("isLoggedIn"); 
    if (isLoggedIn && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);


    const Masuk = () => {
        navigate("/login");
    };
    const Daftar = () => {
        navigate("/register");
    };

    const handleLogout = () => {
        // Logout user
        setIsLoggedIn(false);
        setUsername("");
        localStorage.removeItem("username"); // Hapus data username di localStorage
        localStorage.removeItem("isLoggedIn"); // Hapus tanda login
      };

    return (
        <nav className="flex items-center w-full bg-white text-black p-4 top-0 z-10 justify-evenly font-inter shadow-xl font-[Inter] fixed ">
            <ul className="flex items-center gap-4 list-none m-0 p-0">
                <li>
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-12 object-contain"
                    />
                </li>
                <li><a href="#" className="hover:text-blue-500">Beranda</a></li>
                <li><a href="#" className="hover:text-blue-500">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-blue-500">Donasi</a></li>
                <li><a href="#" className="hover:text-blue-500">Galang Dana</a></li>
            </ul>
            <ul className="flex items-center gap-4 list-none m-0 p-0">

                {isLoggedIn ? (
                    <>
                        <li>
                            <span className="text-gray-700">Halo, {username}</span>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                                Keluar
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <a
                                href=""
                                onClick={(e) => {
                                    e.preventDefault();
                                    Masuk();
                                }}
                                className="hover:text-blue-500"
                            >
                                Masuk
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                onClick={(e)=> {
                                    e.preventDefault();
                                    Daftar();
                                }}
                                className="bg-[#11999E] text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                Daftar
                            </a>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
