import Navbar from "../components/navbar";
import Frame from "../assets/FRAME.png";
import "../index.css";

const LandingPage = () => {
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
                    className="relative container mx-auto p-10"
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
                        <label className="flex items-center gap-2 font-[Inter] w-full">
                            <input
                                type="text"
                                className="grow px-3 py-2 border border-none rounded-md focus:outline-none"
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
                <div className="bg-[#E4F9F5] p-10 mx-auto h-[25rem] w-[70rem] rounded-xl mb-8">
                    <div className="card card-compact bg-base-100 w-96 shadow-xl rounded-lg bg-white">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default LandingPage;
