import Layout from "../../layouts/layout";
import Router, { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalEditFailed from "../../../../components/modals/modalFailedEdit";
import ModalEditSuccess from "../../../../components/modals/modalEditSucces";

export default function editContents({
  usernameID,
  token,
  id,
  dataContentEdit,
}) {
  const router = useRouter();
  const [modalEditSucces, setModalEditSucces] = useState(false);
  const [modalEditFailed, setModalEditFailed] = useState(false);

  const [kontenInfo, setKontenInfo] = useState({
    title: `${dataContentEdit.title}`,
    intro: `${dataContentEdit.intro}`,
    history: `${dataContentEdit.history}`,
    category: `${dataContentEdit.category}`,
    coordinate: `${dataContentEdit.coordinate}`,
    distance: `${dataContentEdit.distance}`,
    event: `${dataContentEdit.event}`,
    excerpt: `${dataContentEdit.excerpt}`,
    mainpicture: `${dataContentEdit.mainpicture}`,
    pictures: `${dataContentEdit.pictures}`,
    slug: `${dataContentEdit.slug}`,
    trivia: `${dataContentEdit.trivia}`,
    videoId: `${dataContentEdit.videoId}`,
  });

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "PUT",
      url: `http://canopusapi.test/api/content/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        title: kontenInfo.title,
        intro: kontenInfo.intro,
        history: kontenInfo.history,
        category: kontenInfo.category,
        coordinate: kontenInfo.coordinate,
        distance: kontenInfo.distance,
        event: kontenInfo.event,
        excerpt: kontenInfo.excerpt,
        mainpicture: kontenInfo.mainpicture,
        pictures: kontenInfo.pictures,
        slug: kontenInfo.slug,
        trivia: kontenInfo.trivia,
        videoId: kontenInfo.videoId,
      },
    }).then(({ error }) => {
      if (error) {
        setModalEditFailed(true);
        console.log("error");
      } else {
        console.log("Berhasil");
        router.back();
      }
    });
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "DELETE",
      url: `http://canopusapi.test/api/content/${dataContentEdit.id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    <Layout title="Edit Contents">
      <main className="font-inter">
        {modalEditSucces ? <ModalEditSuccess /> : null}
        {modalEditFailed ? <ModalEditFailed /> : null}
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* main */}
          <div className="flex flex-wrap md:flex-nowrap">
            {/* flex kiri */}
            <div className="w-full h-fit container rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
              <h1 className="font-semibold text-lg">
                No. ID {dataContentEdit.id}
              </h1>
              {/* form untuk mengisi data anggota baru */}
              <form onSubmit={handleUpdate}>
                <div className="flex flex-col justify-center">
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Title
                      </span>
                      <input
                        defaultValue={dataContentEdit.title}
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            title: target.value,
                          })
                        }
                        type="text"
                        name="title"
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Intro
                      </span>
                      <textarea
                        defaultValue={dataContentEdit.intro}
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            intro: target.value,
                          })
                        }
                        type="text"
                        name="intro"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        History
                      </span>
                      <textarea
                        defaultValue={dataContentEdit.history}
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            history: target.value,
                          })
                        }
                        type="text"
                        name="history"
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
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            category: target.value,
                          })
                        }
                      >
                        <option value="Rasi">Rasi</option>
                        <option value="Planet">Planet</option>
                        <option value="Bintang">Bintang</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Coordinate
                      </span>
                      <input
                        defaultValue={dataContentEdit.coordinate}
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            coordinate: target.value,
                          })
                        }
                        type="text"
                        name="coordinate"
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
                        defaultValue={dataContentEdit.distance}
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            distance: target.value,
                          })
                        }
                        type="text"
                        name="distance"
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
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            event: target.value,
                          })
                        }
                      >
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
                      </select>
                    </label>
                  </div>
                  <div className="my-2">
                    {/* <label className="block" htmlFor="file_input">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Main Picture
                      </span>
                      <input
                        defaultValue={dataContentEdit.mainpicture}
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            mainpicture: target.value,
                          })
                        }
                        type="file"
                        id="file_input"
                        name="mainPicture"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label> */}
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Main Picture
                      </span>
                      <input
                        defaultValue={dataContentEdit.mainpicture}
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            mainpicture: target.value,
                          })
                        }
                        type="text"
                        name="main picture"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    {/* <label className="block" htmlFor="multiple_files">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Pictures
                      </span>
                      <input
                        defaultValue={dataContentEdit.pictures}
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            pictures: target.value,
                          })
                        }
                        type="file"
                        id="multiple_files"
                        name="pictures"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label> */}
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Pictures
                      </span>
                      <input
                        defaultValue={dataContentEdit.pictures}
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            pictures: target.value,
                          })
                        }
                        type="text"
                        name="Pictures"
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
                        defaultValue={dataContentEdit.trivia}
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            trivia: target.value,
                          })
                        }
                        type="text"
                        name="trivia"
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
                        defaultValue={dataContentEdit.videoId}
                        onChange={({ target }) =>
                          setKontenInfo({
                            ...kontenInfo,
                            videoId: target.value,
                          })
                        }
                        type="text"
                        name="trivia"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* section button */}
                  <div className="flex justify-between mt-12">
                    {/* button batal */}
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="w-full  px-7 mr-4 md:px-16 lg:px-20 py-2 rounded-lg bg-[#718096] hover:bg-[#4A5568] text-white shadow-md"
                    >
                      Hapus
                    </button>
                    {/* button simpan */}
                    <button
                      type="submit"
                      className="w-full  px-7 md:px-16 lg:px-20 py-2 rounded-lg bg-[#FF9636] hover:bg-orange-500 text-white shadow-md"
                    >
                      Edit
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

export async function getServerSideProps(context) {
  // memanggil token session
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const tokenAccess = session.user.token;
  const username = session.user.user.username;

  const { id } = context.params;

  const resContentEdit = await fetch(
    `http://canopusapi.test/api/content/${id}`,
    {
      headers: {
        Authorization: `Bearer ${tokenAccess}`,
      },
    }
  );
  const contenEdit = await resContentEdit.json();
  const dataContentEdit = contenEdit.data;

  return {
    props: {
      dataContentEdit: dataContentEdit,
      id: id,
      usernameID: username,
      token: tokenAccess,
    },
  };
}
