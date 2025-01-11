import login from "../assets/Login.png";
import logoo from "../assets/Logoo.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLogin = async () => {
    if (!email || !password) {
      setPesan("Email dan Password tidak boleh kosong");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/donatur");

      if (response.data) {
        const user = response.data.find((user) => user.email === email);

        if (user && user.password === password) {
          setPesan("Login berhasil!");

        // Simpan username ke localStorage
        localStorage.setItem("username", user.nama); // Simpan nama pengguna
        localStorage.setItem("isLoggedIn", true); // Tandai bahwa user sudah login

          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setPesan(user ? "Password salah" : "Email tidak ditemukan");
        }
      } else {
        setPesan("Data kosong");
      }
    } catch (error) {
      setPesan("Terjadi kesalahan, coba lagi nanti", error);
    }
  };

  return (
    <section>
      <div
        className="grid grid-cols-2 gap-4 p-10 mx-auto justify-center items-center min-h-screen w-full"
        style={{
          backgroundColor: "#FFFFFF",
          color: "#000000",
          fontFamily: "Inter, sans-serif",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      >
        {/* Bagian Gambar */}
        <div className="pl-16" data-aos="fade-up">
          <img src={login} className="w-[30rem]" alt="Login illustration" />
        </div>

        {/* Bagian Form Login */}
        <div
          className="bg-white w-[23rem] h-auto shadow-xl border rounded-xl p-6"
          data-aos="fade-up"
        >
          <div>
            {/* Header Logo */}
            <div className="flex justify-center items-center gap-2 pt-2 pb-4">
              <img src={logoo} alt="Logo" className="w-16" />
              <div className="font-bold text-[#11999E] text-center">
                <h1>Literacy</h1>
                <h1>Connect</h1>
              </div>
            </div>

            {/* Judul */}
            <p className="font-bold text-center pb-4">Masuk ke akunmu</p>

            {/* Form Login */}
            <div>
              <label className="block pb-3">
                <p>Email</p>
                <div className="input input-bordered flex items-center gap-2 bg-white p-2 rounded-lg">
                  <input
                    type="email"
                    className="grow outline-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </label>

              <label className="block">
                <p>Password</p>
                <div className="input input-bordered flex items-center gap-2 bg-white p-2 rounded-lg">
                  <input
                    type="password"
                    className="grow outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </label>

              {/* Tombol Login */}
              <div className="pt-6 text-center">
                <button
                  className="btn bg-[#11999E] text-white w-full rounded-lg"
                  onClick={handleLogin}
                >
                  Masuk
                </button>
                {pesan && <p className="text-red-500 pt-4">{pesan}</p>}
                <p className="text-[#11999E] pt-4 cursor-pointer hover:underline">
                  Lupa Password?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
