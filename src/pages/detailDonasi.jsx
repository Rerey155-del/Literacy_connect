import Navbar from "../components/navbar";
import "../index.css";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";




const DetailDonasi = () => {
    const location = useLocation();
    const [data, setData] = useState([]); // State untuk menyimpan data dari API
    const [error, setError] = useState(null); // State untuk menangani error
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

    // Pemanggilan API menggunakan axios
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/campaign");
                setData(response.data); // Simpan data dari API ke state
                if (response.data && response.data.length > 0) {
                    const data = response.data[0]; // Ambil data donasi pertama
                    setDonasi(data.nominal);
                    setProgres((data.nominal / batas) * 100); // Hitung persentase progres
                }
            } catch (error) {
                setError("Gagal memuat data. Coba lagi nanti.");
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [batas]);

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
                    <h1 className="text-2xl font-bold mb-4">Daftar Donasi</h1>

                    {/* Menampilkan pesan error jika terjadi */}
                    {error && <p className="text-red-500">{error}</p>}

                    {/* Menampilkan kartu-kartu data */}
                    <div className="container mx-auto px-8 mt-14">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                data-aos="fade-up"
                            >
                                <img
                                    src={item.foto} // Gambar dari API
                                    alt={item.title}
                                    className="w-full h-[25rem] object-cover rounded-lg"
                                />
                                <h2 className="text-2xl font-bold mt-4">{item.judul}</h2>
                                <div className="border bg-transparent p-10">
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
                                        className="progress w-full "
                                        value={progres}
                                        max="100"
                                    ></progress>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default DetailDonasi;
