import Head from "next/head";
import bg from "../../public/imgs/background/bg-login.png";
import {signIn, useSession} from "next-auth/react";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

export default function login(){
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const { status } = useSession();
  const router = useRouter();
  const [FailedLogin, setFailedLogin] = useState(false);

  useEffect(() => {
    if (status === "authenticated") Router.replace("/dashboard");
  }, [status]);

  const handleSubmit = async (e) => {
    e.prevenntDefault();

    await signIn("login", {
      username: userInfo.username,
      password: userInfo.password,
      redirect: false,
    }).then(({ error }) => {
      if (error){
        setFailedLogin(true);
      } else {
        router.push("/dashboard");
      }
    });
  };

  return(
        <main className="font-poppins">
        <Head>
            <title>Login Dashboard</title>
        </Head>
        <div className="text-gray-600 body-font font-inter content-center">
        {/* Alert */}
        <div className="flex flex-wrap h-screen content-center items-center" style={{backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
        }}>
          {/* flex kiri Logo */}
          <div className="w-56 md:w-1/2 mt-10 md:mt-0 mb-10 md:mb-0 mx-auto">
            <img src="imgs/logo.png" alt="Logo" className="mx-auto md:w-1/2" />
          </div>
          {/* flex kanan Card login */}
          <div className="w-5/6 md:w-1/2 mx-auto mb-24 md:mb-0 md:pb-24 h-fit md:h-screen bg-[#282F6A] rounded-lg p-8 flex content-center">
            <div className="w-full md:w-3/5 mx-auto md:pt-10 md:mt-24">
              <h1 className="text-2xl md:text-4xl text-white font-bold title-font mb-10">
                Dashboard
              </h1>
              {/* form */}
              <form onSubmit={handleSubmit}>
                {/* username */}
                <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-white">
                        Username
                      </span>
                      <input
                        type="text"
                        id="username"
                        placeholder="Masukan username"
                        name="username"
                        value={userInfo.username}
                        required
                        autoFocus
                        onChange={({ target }) =>
                          setUserInfo({ ...userInfo, username: target.value })
                        }
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                </div>
                <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-white">
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
                          setUserInfo({ ...userInfo, password:target.value })
                        }
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                </div>
                <button
                  type="submit"
                  value="Login"
                  className="w-full mt-8 rounded-lg shadow-md text-white bg-[#FF9636] bg-opacity-90 hover:bg-orange-500 border-0 py-2 px-8 focus:outline-none text-sm md:text-lg transition-colors duration-150 ease-in-out"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
}