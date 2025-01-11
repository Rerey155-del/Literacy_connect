import Navbar from "../components/navbar";
import foto6 from "../assets/foto6.jpg";
import foto7 from "../assets/foto7.jpg";
import foto8 from "../assets/foto8.jpg";


import "../index.css";
import Footer from "../components/footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";


const Donasi = () => {
    const location = useLocation();


    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll ke atas
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <section
            style={{
                backgroundColor: "#FFFF", // Ubah warna berdasarkan darkMode
                color: "#000000", // Warna teks
                minHeight: "100vh",
                width: "100%", // Pastikan mengisi seluruh lebar window
                margin: "0",
                padding: "0",
                boxSizing: "border-box",
                overflowX: "hidden", // Hindari overflow horizontal
                fontFamily: "Inter",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column", // Menyusun elemen secara vertikal
            }}
        >
            <Navbar />
            <div>
                <div className="container mt-20 grid grid-cols-2 p-12 mx-auto justify-items-center"  >
                    <p className=" flex font-semibold items-center text-2xl">Ikuti untuk berita terbaru hari ini!</p>
                    <label className="flex items-center gap-2 bg-white p-1 font-[Inter] w-1/2 rounded-2xl border">
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
                <div className="px-12 container mx-auto">
                    <div className="card shadow-2xl flex flex-col md:flex-row bg-white border mb-12 p-8 items-center gap-8">
                        {/* Bagian Gambar */}
                        <div className="flex-shrink-0">
                            <img
                                src={foto6}
                                className="w-[24rem] h-[20rem] rounded-3xl object-cover"
                                alt="Literacy Connect"
                            />
                        </div>

                        
                        <div className="flex-1">
                            <h2 className="font-bold text-xl mb-4">
                                Meningkatkan Literasi Anak di Sumatra Barat Bersama Literacy Connect
                            </h2>
                            <p>
                                
                                Literacy Connect baru saja meluncurkan program Satu Buku, Sejuta Harapan
                                untuk mendukung pendidikan anak-anak di daerah terpencil Sumatra Barat.
                            </p>
                        </div>
                    </div>
                    <div className="card shadow-2xl flex flex-col md:flex-row bg-white border mb-12 p-8 items-center gap-8">
                        {/* Bagian Gambar */}
                        <div className="flex-shrink-0">
                            <img
                                src={foto7}
                                className="w-[24rem] h-[20rem] rounded-3xl object-cover"
                                alt="Literacy Connect"
                            />
                        </div>

                        
                        <div className="flex-1">
                            <h2 className="font-bold text-xl mb-4">
                            Donasi Buku Mencapai 1.000 Eksemplar

                            </h2>
                            <p>
                              
                            Kampanye Satu Buku untuk Masa Depan berhasil mengumpulkan 1.000 buku dari para donatur di seluruh Indonesia.
                            </p>
                        </div>
                    </div>
                    <div className="card shadow-2xl flex flex-col md:flex-row bg-white border mb-12 p-8 items-center gap-8">
                        {/* Bagian Gambar */}
                        <div className="flex-shrink-0">
                            <img
                                src={foto8}
                                className="w-[24rem] h-[20rem] rounded-3xl object-cover"
                                alt="Literacy Connect"
                            />
                        </div>

                        
                        <div className="flex-1">
                            <h2 className="font-bold text-xl mb-4">
                            Peluncuran Program Baca Bersama Relawan

                            </h2>
                            <p>
                            Literacy Connect meluncurkan program baru yang melibatkan relawan untuk membaca bersama anak-anak
                            </p>
                        </div>
                    </div>

                    
                    
                    
                </div>
            </div>
            <Footer />
        </section>

    );
};

export default Donasi;
