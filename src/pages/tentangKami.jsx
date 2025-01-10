import Navbar from "../components/navbar";
import foto4 from "../assets/foto4.png";
import dila from "../assets/dilaa.png"; 
import siapa from "../assets/unknown.jpg";


import "../index.css";

import Footer from "../components/footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";


const LandingPage = () => {
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
                    fontFamily: "Inter",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column", // Menyusun elemen secara vertikal
                }}
            >
                <Navbar />
                <div className="mt-[8rem] text-center font-[Montserrat] font-bold text-xl mb-10">
                    <h2>Mewujudkan Akses Pendidikan Untuk Semua</h2>
                    <h2>Satu Donasi pada satu waktu</h2>
                    <button className="btn btn-wide btn-accent mt-4 bg-[#11999E] text-white">Donasi</button>
                    <div className="flex justify-center mt-4 ">
                        <img className="container object-cover h-[20rem] rounded-2xl" src={foto4} alt="" />
                    </div>
                </div>
                <div className=" text-center font-[Montserrat] font-semibold text-lg bg-[#216a6dd9] w-full h-auto mb-10">
                    <div className="grid grid-cols-2 p-8 text-white gap-12 container mx-auto items-center">
                        <div>
                            <h2>Visi</h2>
                            <p>Mewujudkan akses pendidikan yang matang dan berkualitas bagi anak-anak SUMBAR untuk meningkatkan keterampilan literasi, menciptakan generasi cerdas, kreatif, dan daya saing </p>
                        </div>
                        <div>
                            <img className="rounded-xl w-full h-[25rem]" src={foto4} alt="" />
                        </div>
                        <div>
                            <img className="rounded-xl w-full h-[25rem]" src={foto4} alt="" />
                        </div>
                        <div>
                            <h2>Misi</h2>
                            <ol className="list-decimal text-left space-y-2">
                                <li>
                                    Menyalurkan donasi secara transparan dan efektif untuk mendukung program literasi bagi anak-anak yang kurang beruntung di Sumatera Barat.
                                </li>
                                <li>
                                    Meningkatkan keterampilan literasi dalam membaca, menulis, dan digital bagi anak-anak di daerah yang minim akses pendidikan.
                                </li>
                                <li>
                                    Menggerakkan masyarakat untuk berpartisipasi dalam meningkatkan akses pendidikan dan memperkecil kesenjangan literasi.
                                </li>
                                <li>
                                    Mendukung pembangunan generasi penerus yang lebih baik dengan memberikan bekal pendidikan yang layak untuk masa depan yang cerah.
                                </li>
                            </ol>

                        </div>
                    </div>
                </div>
                <div className="container mx-auto justify-items-center" >
                    <h2 className="text-center font-bold text-2xl">Meet Our Team</h2>
                    <div className="grid p-6 gap-20 grid-cols-2">
                        <div>
                            <div className="card bg-white w-96 shadow-2xl">
                                <figure className="px-6 pt-6">
                                    <img
                                        src={dila}
                                        alt="Shoes"
                                        className="rounded-xl h-[20rem]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Fhadila Nova Ramadhani</h2>
                                    <p>( Ketua )</p>
                                    <p>Sistem Informasi</p>
                                    <p>22101152610480</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-white w-96 shadow-2xl">
                                <figure className="px-6 pt-6">
                                    <img
                                        src={siapa}
                                        alt="Shoes"
                                        className="rounded-xl h-[20rem]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                <h2 className="card-title">Nesa Eriza Putri</h2>
                                    <p>( Anggota )</p>
                                    <p>Sistem Informasi</p>
                                    <p>22101152610361</p>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </section>
    );
};

export default LandingPage;
