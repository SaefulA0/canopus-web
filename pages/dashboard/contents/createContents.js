import Layout from "../layouts/layout";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";



export default function createContents ({ token }) {
    const router = useRouter();
    const tokenAccess = token;
    const {data: session, status} = useSession();
    const [title, setTitle] = useState('');
    const [intro, setIntro] = useState('');
    const [history, setHistory] = useState('');
    const [category, setCategory] = useState('');
    const [coordinate, setCoordinate] = useState('');
    const [distance, setDistance] = useState('');
    const [event, setEvent] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [mainImg, setMainimg] = useState('');
    const [img, setImg] = useState('');
    const [slug, setSlug] = useState('');
    const [trivia, setTrivia] = useState('');
    const [videoid, setVideoid] = useState('');
    
    useEffect(() => {
      if (status === "unauthenticated") signOut(), Router.replace("/dashboard/login");
    }, [status]);

    const handleFileChange = (e) => {

      const imageData = e.target.files[0]
      const imageData1 = e.target.files[0]

      if (!imageData.type.match('image.*')){
          setMainimg('');

          return
      }
      if (!imageData1.type.match('image.*')){
          setImg('');

          return
      }
      setMainimg(imageData);
      setImg(imageData1);
  }

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
      excerpt: excerpt,
      mainImg: mainImg,
      img: img,
      slug: slug,
      trivia: trivia,
      videoid: videoid,
    }

    
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

    return(
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
                        <input
                          type="text"
                          name="category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
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
                        <input
                          type="text"
                          name="event"
                          value={event}
                          onChange={(e) => setEvent(e.target.value)}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Excerpt
                        </span>
                        <input
                          type="text"
                          name="excerpt"
                          value={excerpt}
                          onChange={(e) => setExcerpt(e.target.value)}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block" for="file_input">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Main Picture
                        </span>
                        <input
                          type="file"
                          id="file_input"
                          name="mainPicture"
                          onChange={handleFileChange}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block" for="multiple_files">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Pictures
                        </span>
                        <input
                          type="file"
                          id="multiple_files"
                          name="pictures"
                          onChange={handleFileChange}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          multiple
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Slug
                        </span>
                        <input
                          type="text"
                          name="slug"
                          value={slug}
                          onChange={(e) => setSlug(e.target.value)}
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