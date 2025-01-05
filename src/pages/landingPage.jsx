import Navbar from "../components/navbar";
import Frame from "../assets/FRAME.png";
import "../index.css";
import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import Footer from "../components/footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";


const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);

      useEffect(() => {
        window.scrollTo(0, 0); // Scroll ke atas
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [location]); 

    return (
        <section>
            <div
                style={{
                    backgroundColor: "#FFFF", // Ubah warna berdasarkan darkMode
                    color: "#000000", // Warna teks
                    minHeight: "100vh",
                    width: "100vw", // Pastikan mengisi seluruh lebar window
                    margin: "0",
                    padding: "0",
                    boxSizing: "border-box",
                    overflow: "hidden", // Hindari overflow horizontal
                    fontSize: "Inter",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column", // Menyusun elemen secara vertikal
                }} 
            >
                <Navbar />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center", // Posisi gambar dan teks di tengah horizontal
                        alignItems: "center",
                        marginTop: "6rem"// Posisi gambar dan teks di tengah vertikal
                    }}
                    className="relative container mx-auto p-10" data-aos="fade-up"
                >
                    {/* Gambar Background */}
                    <div>
                        <img
                            src={Frame}
                            alt="Logo Google"
                            className="w-full h-[25rem] object-cover rounded-lg"
                        />
                    </div>

                    {/* Bar Pencarian */}
                    <div
                        className="absolute bottom-[0rem]  bg-white w-[90%] sm:w-[60%] md:w-[40rem] p-4 rounded-lg shadow-xl flex items-center gap-2"
                    >
                        <label className="flex items-center gap-2 bg-white font-[Inter] w-full">
                            <input
                                type="text"
                                className="grow px-3 py-2 border bg-white border-none rounded-md focus:outline-none"
                                placeholder="Search"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-5 w-5 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                    </div>

                </div>

                <div className=" mt-24 gap-6 flex items-center justify-center  text-xl lg:gap-32 mb-24  ">
                    <div className=" text-center lg:space-y-3 lg:text-xl ">
                        <p className="text-2xl font-bold text-[#11999E]">Rp 158.400.000</p>
                        <p>Total Donasi</p>
                    </div>

                    <div className=" text-center lg:space-y-3 lg:text-xl">
                        <p className="text-2xl font-bold text-[#11999E]">20.000</p>
                        <p>Donatur</p>
                    </div>

                    <div className="text-center lg:space-y-3 lg:text-xl ">
                        <p className="text-2xl font-bold text-[#11999E]">199</p>
                        <p>Program</p>
                    </div>
                </div>
                <div className="bg-[#E4F9F5] grid grid-cols-3 gap-4 p-10 mx-auto h-auto w-auto rounded-xl mb-8">
                    <div className="card card-compact bg-base-100 w-96 shadow-xl rounded-lg bg-white">
                        <figure>
                            <img
                                src={foto1}
                                alt="" />
                        </figure>
                        <div className="card-body h-[15rem]">
                            <h2 className="card-title">4 Bulan Nunggak Iuran Sekolah, Rani Terancam Putus Sekolah</h2>
                            <div className="mt-16">
                                <p className="text-[#11999E] font-medium">Literacy Connect</p>
                                <p>Dana terkumpul</p>
                            </div>
                            <progress className="progress w-56 bg-[#11999E] w-full" value="100" max="100"></progress>
                            <div className="flex justify-between">
                                <p className="text-left">Rp. 4.000.000</p>
                                <p className="text-right">6 Donatur</p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl rounded-lg bg-white">
                        <figure>
                            <img
                                src={foto2}
                                alt="" />
                        </figure>
                        <div className="card-body h-[15rem]">
                            <h2 className="card-title">Beasiswa Pendidikan yang Putus Sekolah</h2>
                            <div className="mt-14">
                                <p className="text-[#11999E] font-medium">Literacy Connect</p>
                                <p>Dana terkumpul</p>
                            </div>
                            <progress className="progress w-56 bg-[#11999E] w-full" value="70" max="100"></progress>
                            <div className="flex justify-between">
                                <p className="text-left">Rp. 4.000.000</p>
                                <p className="text-right">6 Donatur</p>
                            </div>

                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl rounded-lg bg-white">
                        <figure>
                            <img
                                src={foto3}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body h-[15rem]">
                            <h2 className="card-title">Bantu hadirkan pendidikan yang adil dan layak untuk anak-anak pedalaman kampung opang</h2>
                            <div className="mt-10">
                                <p className="text-[#11999E] font-medium">Kampung opang</p>
                                <p>Dana terkumpul</p>
                                <progress className="progress w-full bg-[#11999E] " value="100" max="100"></progress>
                                <div className="flex justify-between">
                                    <p className="text-left">Rp. 4.000.000</p>
                                    <p className="text-right">6 Donatur</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-10 mx-auto font-semibold text-2xl word-break w-[35rem] text-center">
                    <p>Pintu kami selalu terbuka untuk lebih banyak orang yang ingin mendukung satu sama lain</p>
                    <button className="btn btn-outline btn-accent p-4 mt-8">Ikut serta </button>
                </div>
                <div className="bg-[#11999ED9] flex flex-col items-center justify-center gap-4 p-10 mx-24 h-[20rem] w-auto rounded-xl mb-8">
                    <p className="break-words w-[25rem] mx-auto text-center text-white font-semibold text-2xl">Jangan lewatkan update mingguan kami tentang donasi</p>
                    <div className="flex justify-center gap-4">
                        <input type="text" placeholder="masukkan email anda..." className="input input-bordered  bg-white w-full max-w-xs rounded-3xl" />
                        <button className="btn btn-active btn-accent text-white bg-[#30E3CA]">Langganan</button>
                    </div>
                </div>
            </div>
            <Footer/>

        </section>
    );
};

export default LandingPage;
