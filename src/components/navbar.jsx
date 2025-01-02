const Navbar = () => {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-around", // Memberi jarak antar elemen secara merata
                alignItems: "center", // Vertikal tengah
                backgroundColor: "#000",
                color: "#FFF",
                padding: "1rem",
                position: "sticky", // Navbar tetap di atas saat scroll
                top: 0,
                zIndex: 10, // Tetap di atas elemen lainnya
            }}
        >
            <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
                <li>Home</li>
                <li>Activity</li>
                <li>Struktural</li>
                <li>Profile</li>
                <li>Recruitment</li>
            </ul>
            <button style={{ backgroundColor: "#444", color: "#FFF", border: "none", padding: "0.5rem 1rem", borderRadius: "5px" }}>
                Dark Mode
            </button>
        </nav>
    );
};

export default Navbar;
