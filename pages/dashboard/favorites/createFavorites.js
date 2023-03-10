import Layout from "../layouts/layout";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";


export default function createFavorites({ token }) {
  const router = useRouter();
  const tokenAccess = token;
  const {data: session, status} = useSession();
  const [username, setUsername] = useState('');
  const [content_id, setContentId] = useState('');

  useEffect(() => {
    if (status === "unauthenticated") signOut(), Router.replace("/dashboard/login");
  }, [status]);
  
  const createPost = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      content_id: content_id,
    }

    
    //send data to server
    const res = await axios({
      method: "POST",
      url: `http://canopusapi.test/api/favorite`,
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
};

    return(
        <Layout title="Create Favorites">
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
                          name="userId"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Content ID
                        </span>
                        <input
                          type="text"
                          name="contentId"
                          value={content_id}
                          onChange={(e) => setContentId(e.target.value)}
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
    );
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