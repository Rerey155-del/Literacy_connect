import logo from '../assets/Logoo.png';

const Navbar = () => {
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
                <li><a href="#" className="  hover:text-blue-500">Masuk</a></li>
                <li>
                    <a
                        href="#"
                        className="bg-[#11999E] text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Daftar
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
