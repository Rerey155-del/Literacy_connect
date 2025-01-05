import login from "../assets/Login.png"
import logoo from "../assets/Logoo.png"

const LoginPage = () => {
  return (
    <section>
      <div
        className="grid grid-cols-2 gap-4 p-10 mx-auto justify-center items-center min-h-screen w-full"
        style={{
          backgroundColor: "#FFFFFF", // Ubah warna berdasarkan darkMode
          color: "#000000", // Warna teks
          fontFamily: "Inter, sans-serif",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow: "hidden", // Hindari overflow horizontal
        }}
      >
        {/* Bagian Gambar */}
        <div className="pl-16">
          <img src={login} className="w-[30rem]" alt="Login illustration" />
        </div>

        {/* Bagian Form Login */}
        <div className="bg-white w-[23rem] h-auto shadow-xl border rounded-xl p-6">
          <div >
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="email" className="grow outline-none" placeholder="Email" />
                </div>
              </label>

              <label className="block">
                <p>Password</p>
                <div className="input input-bordered flex items-center gap-2 bg-white p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="password" className="grow outline-none" placeholder="Password" />
                </div>
              </label>

              {/* Tombol Login */}
              <div className="pt-6 text-center">
                <button className="btn bg-[#11999E] text-white w-full rounded-lg">
                  Masuk
                </button>
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


