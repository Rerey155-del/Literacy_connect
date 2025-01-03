import Navbar from "../components/navbar";

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
                   
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    fontFamily: "Montserrat",
                    display: "flex",
                    flexDirection: "column", // Menyusun elemen secara vertikal
                }}
            >
                <Navbar />
                <div
                    style={{
                        flex: 1, // Memenuhi ruang sisa
                        display: "flex",
                        justifyContent: "center", // Posisi teks di tengah horizontal
                        alignItems: "center", // Posisi teks di tengah vertikal
                    }}
                >
                    <p>haiiiiidddddddddsdsdddddddddddddddddddddddddddddddddddddddddd</p>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
