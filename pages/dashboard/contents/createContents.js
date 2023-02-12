import Layout from "../layouts/layout";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";

export default function createContents({ token }) {
  const router = useRouter();
  const tokenAccess = token;
  const { data: session, status } = useSession();
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [history, setHistory] = useState("");
  const [category, setCategory] = useState("");
  const [coordinate, setCoordinate] = useState("");
  const [distance, setDistance] = useState("");
  const [event, setEvent] = useState("");
  const [mainpicture, setMainpicture] = useState("");
  const [pictures, setPictures] = useState("");
  const [trivia, setTrivia] = useState("");
  const [videoid, setVideoid] = useState("");

  useEffect(() => {
    if (status === "unauthenticated")
      signOut(), Router.replace("/dashboard/login");
  }, [status]);

  const createPost = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      intro: intro,
      history: history,
      category: category,
      coordinate: coordinate,
      distance: distance,
      event: event,
      mainpicture: mainpicture,
      pictures: pictures,
      trivia: trivia,
      videoid: videoid,
    };

    //send data to server
    const res = await axios({
      method: "POST",
      url: `http://canopusapi.test/api/content`,
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

  return (
    <Layout title="Create Contents">
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
                        Title
                      </span>
                      <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Intro
                      </span>
                      <input
                        type="text"
                        name="intro"
                        value={intro}
                        onChange={(e) => setIntro(e.target.value)}
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        History
                      </span>
                      <input
                        type="text"
                        name="history"
                        value={history}
                        onChange={(e) => setHistory(e.target.value)}
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Category
                      </span>
                      <select
                        id="category"
                        name="category"
                        // value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="-">-Pilih-</option>
                        <option value="Rasi Bintang">Rasi</option>
                        <option value="Planet">Planet</option>
                        <option value="Bintang">Bintang</option>
                        <option value="Lainnya di Angkasa">Lainnya</option>
                      </select>
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Coordinate
                      </span>
                      <input
                        type="text"
                        name="coordinate"
                        value={coordinate}
                        onChange={(e) => setCoordinate(e.target.value)}
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Distance
                      </span>
                      <input
                        type="text"
                        name="distance"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Event
                      </span>
                      <select
                        id="event"
                        name="event"
                        value={event}
                        onChange={(e) => setEvent(e.target.value)}
                      >
                        <option value={null}>-Pilih-</option>
                        <option value="Merkurius">Merkurius</option>
                        <option value="Venus">Venus</option>
                        <option value="Bumi">Bumi</option>
                        <option value="Mars">Mars</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Saturnus">Saturnus</option>
                        <option value="Neptunus">Neptunus</option>
                        <option value="Ceres">Ceres</option>
                        <option value="Eris">Eris</option>
                        <option value="Pluto">Pluto</option>
                        <option value="Makemake">Makemake</option>
                        <option value="Haumea">Haumea</option>
                        <option value="Matahari">Matahari</option>
                      </select>
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Main Picture
                      </span>
                      <input
                        type="text"
                        id="main_picture"
                        name="mainPicture"
                        value={mainpicture}
                        onChange={(e) => setMainpicture(e.target.value)}
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Pictures
                      </span>
                      <input
                        type="text"
                        id="pictures"
                        name="pictures"
                        value={pictures}
                        onChange={(e) => setPictures(e.target.value)}
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Trivia
                      </span>
                      <input
                        type="text"
                        name="trivia"
                        value={trivia}
                        onChange={(e) => setTrivia(e.target.value)}
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Video id
                      </span>
                      <input
                        type="text"
                        name="videoId"
                        value={videoid}
                        onChange={(e) => setVideoid(e.target.value)}
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
                    <button
                      className="w-full  px-7 md:px-16 lg:px-20 py-2 rounded-lg bg-[#FF9636] hover:bg-orange-500 text-white shadow-md"
                      type="submit"
                    >
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
export async function getServerSideProps(req, res) {
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
  return {
    props: {
      token: token,
    },
  };
}
