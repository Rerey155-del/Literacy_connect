import Navbar from "../components/navbar";

const LandingPage = () => {
    return (
        <section>
            <div
                style={{
                    backgroundColor: "#FBF8EF", // Ubah warna berdasarkan darkMode
                    color: "#000000", // Warna teks
                    minHeight: "100vh",
                    width: "100vw", // Pastikan mengisi seluruh lebar window
                    margin: "0",
                    padding: "0",
                    boxSizing: "border-box",
                    overflow: "hidden", // Hindari overflow horizontal
                    backgroundImage: `url('https://res.cloudinary.com/dbc7scew4/image/upload/v1733543685/glow_effect_odggcl.png')`,
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
