import Navbar from "../components/navbar";
import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



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
                <div className="mt-[8rem]">
                    <h1 className="text-center font-[Montserrat] font-bold text-xl">Dari Donasi Untuk Literasi</h1>
                    <div className="container mx-auto grid p-4 gap-2 grid-cols-3 justify-items-center">
                        <div>
                            <div className="card bg-white w-96 shadow-2xl">
                                <figure className="px-6 pt-6">
                                    <img
                                        src={foto1}
                                        alt="Shoes"
                                        className="rounded-xl h-[12rem] object-cover" />
                                </figure>
                                <div className="card-body h-[12rem] items-center text-center">
                                    <h2 className="text-md font-bold">4 Bulan Nunggak Iuran Sekolah, Rani Terancam Putus Sekolah</h2>
                                    <button className="btn btn-wide btn-accent mt-4 bg-[#11999E] text-white">Donasi</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-white w-96 shadow-2xl">
                                <figure className="px-6 pt-6">
                                    <img
                                        src={foto2}
                                        alt="Shoes"
                                        className="rounded-xl h-[12rem] object-cover" />
                                </figure>
                                <div className="card-body h-[12rem] items-center text-center">
                                    <h2 className="text-md font-bold">Beasiswa Pendidikan yang Putus Sekolah</h2>
                                    <button className="btn btn-wide btn-accent mt-4 bg-[#11999E] text-white">Donasi</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-white w-96 shadow-2xl">
                                <figure className="px-6 pt-6">
                                    <img
                                        src={foto3}
                                        alt="Shoes"
                                        className="rounded-xl h-[12rem] object-cover" />
                                </figure>
                                <div className="card-body h-[12rem] items-center text-center">
                                    <h2 className="text-md font-bold">Bantu hadirkan pendidikan yang adil dan layak untuk anak-anak pedalaman kampung opang</h2>
                                    <button className="btn btn-wide btn-accent mt-2 bg-[#11999E] text-white">Donasi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* accordion */}
                <div className="p-12 bg-[#57a2a5] w-full h-auto mt-10">
                    <div className="container mx-auto">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span" className="">Apa itu Literacy Connect?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Literacy Connect adalah platform penggalangan dana untuk mendukung program literasi anak-anak yang kurang beruntung terkhususnya di Sumatera Barat
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span">Bagaimana cara kerja Literacy Connect?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                blablabla
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                <Typography component="span">Apakah saya bisa memilih program yang ingin saya dukung?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            blablabla
                            </AccordionDetails>
                            
                        </Accordion>
                    </div>
                </div>



            </div>

            <Footer />

        </section>
    );
};

export default Donasi;
