import Navbar from "../components/navbar";
import "../index.css";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const DetailDonasi = () => {
    const { id } = useParams();
    const location = useLocation();
    const [data, setData] = useState(null); // Menyimpan satu objek data dari API
    const [donasi, setDonasi] = useState(0);
    const [batas] = useState(50000000); // Batas maksimal donasi
    const [progres, setProgres] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll ke atas
    }, [location]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/campaign/${id}`)
            .then((response) => {
                const fetchedData = response.data; // Data dari API berdasarkan id
                setData(fetchedData); // Simpan data ke state
                setDonasi(fetchedData.nominal || 0); // Set nilai nominal donasi (default 0 jika null)
                setProgres(((fetchedData.nominal || 0) / batas) * 100); // Hitung progres donasi
            });
    }, [id, batas]);

    

    return (
        <section>
            <div
                style={{
                    backgroundColor: "#FFFF",
                    color: "#000000",
                    minHeight: "100vh",
                    width: "100vw",
                    margin: "0",
                    padding: "0",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    fontFamily: "Inter",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Navbar />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Detail Donasi</h1>

                    <div className="container mx-auto px-8 mt-14">
                        {data ? ( 
                            <div data-aos="fade-up">
                                <img
                                    src={data.foto} // Gambar dari API
                                    alt={data.judul}
                                    className="w-full h-[25rem] object-cover rounded-lg"
                                />
                                <h2 className="text-2xl font-bold mt-6">{data.judul}</h2>
                                <div className="container mx-auto border bg-transparent p-10 rounded-xl mt-6">
                                    <div className="flex">
                                        <h2 className="font-bold text-3xl">
                                            {donasi.toLocaleString("id-ID", {
                                                style: "currency",
                                                currency: "IDR",
                                            })}
                                        </h2>
                                        <p className="mt-2 ml-auto text-gray-600">
                                            terkumpul dari{" "}
                                            {batas.toLocaleString("id-ID", {
                                                style: "currency",
                                                currency: "IDR",
                                            })}
                                        </p>
                                    </div>
                                    <progress
                                        className="progress w-full"
                                        value={progres}
                                        max="100"
                                    ></progress>
                                </div>
                                <div className="grid grid-cols-2 gap-20 mt-4">
                                    <button className="btn w-full btn-accent mt-4 bg-green-600 text-white">
                                        Donasi Sekarang
                                    </button>
                                    <button className="btn w-full btn-accent mt-4 bg-white">
                                        Bagikan
                                    </button>
                                </div>
                                <div className="container mx-auto border bg-transparent p-10 rounded-xl mt-6">
                                    <p className="text-lg">{data.definisi}</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center text-gray-500 font-semibold">Memuat data...</p> // Tampilkan pesan saat data belum tersedia
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default DetailDonasi;
