import Login from "../assets/Login.png";
import logoo from "../assets/Logoo.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
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

  const login = () => {
    navigate("/login");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!nama || !email || !password) {
      setPesan("Nama, Email, dan Password tidak boleh kosong");
      return;
    }

    try {
      // Kirim data ke server menggunakan POST
      const response = await axios.post("http://localhost:5000/donatur", {
        nama: nama,
        email: email,
        password: password,
      });

      

      if (response.status === 201) {
        setPesan("Registrasi berhasil! Mengarahkan ke halaman beranda...");
        setTimeout(() => {
          navigate("/"); // Navigasi ke halaman beranda
        }, 2000);
      } else {
        setPesan("Terjadi kesalahan, coba lagi nanti.");
      }
    } catch (error) {
      setPesan("Terjadi kesalahan saat menghubungi server.", error);
    }
  };

  return (
    <section>
      <div
        className=" grid grid-cols-2  p-10 mx-auto justify-center items-center min-h-screen w-full"
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
          <img src={Login} className="w-[30rem]" alt="Login illustration" />
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
            <p className="font-bold text-center pb-4">Daftar akun baru</p>

            {/* Form Login */}
            <form onSubmit={handleLogin}>
              <label className="block pb-3">
                <p>Nama</p>
                <div className="input input-bordered flex items-center gap-2 bg-white p-2 rounded-lg">
                  <input
                    type="text"
                    className="grow outline-none"
                    placeholder="Masukkan Nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </div>
              </label>

              <label className="block pb-3">
                <p>Email</p>
                <div className="input input-bordered flex items-center gap-2 bg-white p-2 rounded-lg">
                  <input
                    type="email"
                    className="grow outline-none"
                    placeholder="Masukkan Email"
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
                    placeholder="Masukkan Password"
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
                  Daftar
                </button>
                {pesan && <p className="text-red-500 pt-4">{pesan}</p>}
                <p className="pt-4">Sudah memiliki akun?<br />
                  <span className="text-[#11999E] pt-4 cursor-pointer hover:underline " onClick={login}>Masuk disini</span>
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Register;
