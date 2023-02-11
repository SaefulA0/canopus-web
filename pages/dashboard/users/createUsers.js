import Layout from "../layouts/layout";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";

export default function createUsers({ token }){
    const router = useRouter();
    const tokenAccess = token;
    const {data: session, status} = useSession();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [banner, setBanner] = useState('');
    const [bio, setBio] = useState('');

    useEffect(() => {
      if (status === "unauthenticated") signOut(), Router.replace("/dashboard/login");
    }, [status]);

    const createPost = async (e) => {
      e.preventDefault();
  
      const data = {
        username: username,
        email: email,
        password: password,
        confirm_password: confirm_password,
        avatar: avatar,
        banner: banner,
        bio: bio,
      }
  
      
      //send data to server
      const res = await axios({
        method: "POST",
        url: `http://canopusapi.test/api/user`,
        headers: {
          Authorization: `Bearer ${tokenAccess}`,
        },
        data: data,
      }).then(({ error }) => {
        if (error) {
          console.log("error");
        } else {
          console.log("Berhasil");
          router.back();
        }
      });    
      console.log(res);
  };
    return(
        <Layout title="Create Users">
        <main className="font-inter">
          <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
            {/* main */}
            <div className="flex flex-wrap md:flex-nowrap">
              {/* flex kiri */}
              <div className="w-full h-fit container rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
                {/* form untuk mengisi data anggota baru */}
                <form onSubmit={createPost}>
                  <div className="flex flex-col justify-center">
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Username
                        </span>
                        <input
                          type="text"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Email
                        </span>
                        <input
                          type="text"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                    <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Password
                        </span>
                        <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                    <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Confirm Password
                        </span>
                        <input
                          type="password"
                          name="confirm_password"
                          value={confirm_password}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Avatar
                        </span>
                        <input
                          type="text"
                          id="avatar"
                          name="avatar"
                          onChange={(e) => setAvatar(e.target.value)}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Banner
                        </span>
                        <input
                          type="text"
                          id="banner"
                          name="banner"
                          onChange={(e) => setBanner(e.target.value)}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Bio
                        </span>
                        <input
                          type="text"
                          name="bio"
                          ame="excerpt"
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    {/* section button */}
                    <div className="flex justify-between mt-12">
                      {/* button batal */}
                      <button
                        type="button"
                        onClick={() => router.back()}
                        className="w-full  px-7 mr-4 md:px-16 lg:px-20 py-2 rounded-lg bg-[#718096] hover:bg-[#4A5568] text-white shadow-md"
                      >
                        Kembali
                      </button>
                      {/* button simpan */}
                      <button className="w-full  px-7 md:px-16 lg:px-20 py-2 rounded-lg bg-[#FF9636] hover:bg-orange-500 text-white shadow-md" type="submit">
                        Tambah
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
}
export async function getServerSideProps(req, res){
  const session = await getSession(req, res);
  if (!session) {
    return {
      redirect: {
        destination: "/dashboard/login",
        permanent: false,
      },
    };
  }
  const token = session.user.token;
  return{
    props:{
      token: token,
    },
  };
}