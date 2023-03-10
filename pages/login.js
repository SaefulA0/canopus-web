import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";
import Head from "next/head.js";
import Footer from "../components/footer.js";

export default function Login() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const { status } = useSession();
  const router = useRouter();
  const [FailedLogin, setFailedLogin] = useState(false);

  useEffect(() => {
    if (status === "authenticated") Router.replace("/beranda");
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signIn("login", {
      username: userInfo.username,
      password: userInfo.password,
      redirect: false,
    }).then(({ error }) => {
      if (error) {
        setFailedLogin(true);
      } else {
        router.push("/beranda");
      }
    });
  };

  return (
    <main className="font-poppins">
      <Head>
        <title>Login</title>
        <link rel="icon" type="image/x-icon" href="/imgs/Favicon.png" />
      </Head>
      <div className="relative w-full h-auto bg-loginBG bg-no-repeat bg-cover">
        {FailedLogin ? (
          <div
            class="w-full text-center absolute p-4 text-sm text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            Opps sepertinya <span class="font-medium">Username</span> dan{" "}
            <span class="font-medium">Password</span> yang kamu masukan tidak
            sesuai. Periksa kembali <span class="font-medium">Username</span>{" "}
            dan <span class="font-medium">Password</span> kamu.
          </div>
        ) : null}
        <div className="h-screen">
          <img
            className="mx-auto py-8 pt-28"
            src="/imgs/logo.png"
            alt="Logo"
            width="300"
          />
          <div className="p-5 pb-10">
            <div className="container mx-auto">
              <div className="mx-auto max-w-lg bg-opacity-10 bg-white bg-slate rounded-xl shadow-md p-12">
                <h1 className="font-bold text-3xl text-white">Masuk</h1>
                <p className="text-white">
                  Masuk untuk menjelajahi samudra angkasa!
                </p>
                <form onSubmit={handleSubmit} className="mt-6">
                  <label className="block pb-4">
                    <span className="block text-sm font-semibold text-textMainColor">
                      Username
                    </span>
                    <input
                      type="text"
                      id="username"
                      placeholder="Masukan username"
                      name="username"
                      value={userInfo.username}
                      required
                      onChange={({ target }) =>
                        setUserInfo({ ...userInfo, username: target.value })
                      }
                      className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                  </label>
                  <label className="block pb-1">
                    <span className="block text-sm font-semibold text-textMainColor">
                      Password
                    </span>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      placeholder="Masukan password"
                      value={userInfo.password}
                      onChange={({ target }) =>
                        setUserInfo({ ...userInfo, password: target.value })
                      }
                      className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                  </label>
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="py-2 rounded-lg w-full block text-gray-100 bg-secondColor shadow-lg transition ease-in-out hover:-translate-y-1 hover:bg-secondColorHover duration-300"
                    >
                      Masuk
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="max-w-lg mx-auto text-center mt-6">
              <p className="text-white">
                Belum memiliki akun?
                <a
                  href="/register"
                  className="font-bold ml-1 text-[#FF9636] hover:underline"
                >
                  Daftar sekarang
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
