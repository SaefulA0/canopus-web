import Layout from "../components/layout.js";
import bg from "../public/imgs/background/bg-login.png";

export default function Login() {
  return (
  <Layout title = "Login">
    <body className="font-poppins">
  <div className="w-full h-auto bg-no-repeat bg-cover"
  style={{backgroundImage: `url(${bg.src})`,
  width: '100%',
  height: '100%',
  }}>
    <div className="h-screen">
      <img 
        className="mx-auto py-8 pt-28" 
        src="/imgs/logo.png" 
        alt="Logo"
        width="300"></img>
    <div className="">
    </div>
      <div className="p-5 pb-10">
        <div className="container mx-auto">
          <div className="mx-auto max-w-lg bg-opacity-10 bg-white bg-slate rounded-xl shadow-md p-12" >
            <h1 className="font-bold text-3xl text-white">Masuk</h1>
            <p className="text-white">Masuk untuk menjelajahi samudra angkasa!</p>
            <form action="/login" method="POST" className="mt-6">
              <div className="pb-4">
                <label for="email">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Masukkan E-mail"
                    className="px-7 py-3 border shadow rounded-lg w-full block bg-transparent text-white border-grey focus:outline-none focus:ring-0.5 
                   focus:ring-red-500 focus:border-red-600 @enderror "
                    autofocus
                    value=""
                  />
                  <p className="text-sm mt-1 -mb-3 text-red-700">
                  </p>
                </label>
              </div>
              <div className="pb-1">
                <label for="password">
                  <input
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Masukkan kata sandi"
                    className="px-7 py-3 border shadow rounded-lg w-full block bg-transparent text-white border-grey focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue"
                  />
                </label>
              </div>
              <div className="pt-6">
                <button className="py-2 rounded-lg w-full block text-white bg-[#FF9636] bg-opacity-90 hover:bg-orange-500 shadow-lg">
                      Masuk
                    </button>
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-lg mx-auto text-center mt-6">
            <p className="text-white">Belum memiliki akun?<a href="/register" className="font-bold ml-1 text-[#FF9636] hover:underline">Daftar sekarang</a></p>
        </div>
      </div>
    </div>
  </div>
</body>
  </Layout>
  );
}
