import Layout from "../../layouts/layout";
import Router, { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalEditFailed from "../../../../components/modals/modalFailedEdit";
import ModalEditSuccess from "../../../../components/modals/modalEditSucces";

export default function editUsers({ usernameID, token, id, dataUserEdit }) {
  const router = useRouter();
  const username = `${dataUserEdit.username}`;
  const [modalEditSucces, setModalEditSucces] = useState(false);
  const [modalEditFailed, setModalEditFailed] = useState(false);

  const [userInfo, setUserInfo] = useState({
    username: `${dataUserEdit.username}`,
    email: `${dataUserEdit.email}`,
    bio: `${dataUserEdit.bio}`,
    current_password: "",
    password: "",
    confirm_password: "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "PUT",
      url: `http://canopusapi.test/api/user/${username}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        username: userInfo.username,
        email: userInfo.email,
        bio: userInfo.bio,
      },
    }).then(({ error }) => {
      if (error) {
        setModalEditFailed(true);
        console.log("error");
      } else {
        console.log("Berhasil");
        setModalEditSucces(true);
      }
    });
  };

  const handleUpdatePass = async (e) => {
    e.preventDefault();

    // update password
    await axios({
      method: "PUT",
      url: `http://canopusapi.test/api/user/${username}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        // username: userInfo.username,
        current_password: userInfo.current_password,
        password: userInfo.password,
        confirm_password: userInfo.confirm_password,
      },
    }).then(({ error }) => {
      if (error) {
        setModalEditFailed(true);
        console.log("error");
      } else {
        console.log("Berhasil");
        setModalEditSucces(true);
      }
    });
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "DELETE",
      url: `http://canopusapi.test/api/user/${dataUserEdit.id}`,
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
    <Layout title="Edit Users">
      <main className="font-inter">
        {modalEditSucces ? <ModalEditSuccess /> : null}
        {modalEditFailed ? <ModalEditFailed /> : null}
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* main */}
          <div className="flex flex-wrap md:flex-nowrap">
            {/* flex kiri */}
            <div className="w-full h-fit container rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
              <h1 className="font-semibold text-lg">
                No. ID {dataUserEdit.id}
              </h1>
              {/* form untuk mengisi data anggota baru */}
              <form onSubmit={handleUpdate}>
                <div className="flex flex-col justify-center">
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Username
                      </span>
                      <input
                        disabled
                        defaultValue={dataUserEdit.username}
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            username: target.value,
                          })
                        }
                        type="text"
                        name="username"
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
                        defaultValue={dataUserEdit.email}
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            email: target.value,
                          })
                        }
                        type="text"
                        name="email"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Bio
                      </span>
                      <textarea
                        defaultValue={dataUserEdit.bio}
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            bio: target.value,
                          })
                        }
                        type="text"
                        name="bio"
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
              <form onSubmit={handleUpdatePass}>
                <div className="flex flex-col justify-center">
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Masukan password lama
                      </span>
                      <input
                        defaultValue={dataUserEdit.current_password}
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            current_password: target.value,
                          })
                        }
                        type="password"
                        name="current_password"
                        minlength={8}
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Masukan password baru
                      </span>
                      <input
                        defaultValue={dataUserEdit.password}
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            password: target.value,
                          })
                        }
                        type="password"
                        name="password"
                        minLength={8}
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Konfirmasi password baru
                      </span>
                      <input
                        defaultValue={dataUserEdit.confirm_password}
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            confirm_password: target.value,
                          })
                        }
                        type="password"
                        name="password"
                        minlength={8}
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

  const resUserEdit = await fetch(`http://canopusapi.test/api/user/${id}`, {
    headers: {
      Authorization: `Bearer ${tokenAccess}`,
    },
  });
  const userEdit = await resUserEdit.json();
  const dataUserEdit = userEdit.data;

  return {
    props: {
      dataUserEdit: dataUserEdit,
      id: id,
      usernameID: username,
      token: tokenAccess,
    },
  };
}
