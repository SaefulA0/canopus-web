import Image from "next/image";
import Layout from "../../components/layout";
import { getSession, useSession } from "next-auth/react";
import { Router, useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function pengaturanProfile({ dataUser, token }) {
  const { data: session, status } = useSession();
  const tokenAccess = token;
  const router = useRouter([]);
  const user = `${dataUser.username}`;
  const [modalEditSucces, setModalEditSucces] = useState(false);
  const [modalEditFailed, setModalEditFailed] = useState(false);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [name, setName] = useState(`${dataUser.avatar}`);
  const [userInfo, setUserInfo] = useState({
    username: `${dataUser.username}`,
    email: `${dataUser.email}`,
    bio: `${dataUser.bio}`,
  });

  useEffect(() => {
    if (status === "unauthenticated") signOut(), Router.replace("/login");
  }, [status]);

  // show avatar in client
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setName(event.target.files[0].name);
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "PUT",
      url: `http://canopusapi.test/api/user/${user}`,
      headers: {
        Authorization: `Bearer ${tokenAccess}`,
      },
      data: {
        username: userInfo.username,
        email: userInfo.email,
        bio: userInfo.bio,
      },
    });
  };
  return (
    <Layout title="Halaman Pengaturan Profile">
      <main>
        {/* Bagian tentang canopus */}
        <section className="h-auto bg-mainColor py-28 px-10 justify-center">
          <div className="flex flex-row">
            {/* side bar */}
            <div className="basis-1/5">
              <h1 className="font-bold text-xl ml-1 text-gray-100 title-font underline">
                Pengaturan
              </h1>
              <div className="items-center">
                <button className="py-1 px-1 font-bold rounded-lg w-28 text-center mt-2 block text-secondColorHover hover:bg-opacity-90 hover:bg-secondColorHover hover:text-white hover:shadow-lg">
                  Hapus Akun
                </button>
              </div>
              <Image
                src="/imgs/astronout/astro1.png"
                alt="profile 1"
                width={300}
                height={300}
                priority
                className="w-52 sm:mt-60"
              />
            </div>
            {/* akhir side bar */}
            <div className="basis-3/4">
              {/* konten pengaturan */}
              {/* bagian foto cover */}
              <div>
                <div className="relative bg-profileBG w-full h-48 bg-cover">
                  <div className="flex items-center">
                    <Image
                      src="/imgs/defaultAvatar.png"
                      alt="profile 1"
                      width={300}
                      height={300}
                      priority={true}
                      className="w-32 h-32 ml-14 rounded-full shadow-xl items-center my-8"
                    />
                    <div className="ml-7">
                      <h1 className="text-white mb-1">Ganti Profil</h1>
                      <div className="relative bg-thirdColor py-2 px-24 mt-1 rounded-full">
                        <button className="bg-mainColor z-20 py-2 px-8 absolute rounded-full text-white left-0 top-0">
                          <p>Choose File</p>
                        </button>
                        <p className="ml-16">No file chosen</p>
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="fill-gray-300 h-5 w-5 absolute top-3 right-3"
                    >
                      <path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z" />
                    </svg>
                  </button>
                </div>
                {/* isian informasi akun */}
                <form onSubmit={handleUpdate}>
                  <div className="mt-7 flex flex-row justify-center border-t pt-5">
                    {/* bagian user & email */}
                    <div className="basis-2/3 mr-2">
                      {/* field Username */}
                      <div className="my-2">
                        <label className="block">
                          <span className="block text-base mb-1 text-white">
                            Username
                          </span>
                          <input
                            type="text"
                            name="username"
                            required
                            placeholder="Username"
                            defaultValue={dataUser.username}
                            onChange={({ target }) =>
                              setUserInfo({
                                ...userInfo,
                                username: target.value,
                              })
                            }
                            className="mt-1 px-3 py-2 text-gray-800 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          />
                        </label>
                      </div>
                      {/* field Username */}
                      <div className="my-2 mt-6">
                        <label className="block">
                          <span className="block text-base mb-1 text-white">
                            E-mail
                          </span>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Username"
                            defaultValue={dataUser.email}
                            onChange={({ target }) =>
                              setUserInfo({
                                ...userInfo,
                                email: target.value,
                              })
                            }
                            className="mt-1 px-3 py-2 text-gray-800 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                          />
                        </label>
                      </div>
                    </div>
                    {/* bagian bio */}
                    <div className="basis-2/3 ml-2">
                      {/* field Bio */}
                      <div className="">
                        <label className="block">
                          <span className="block text-base mb-1 text-white">
                            Bio
                          </span>
                          <textarea
                            type="text"
                            name="bio"
                            placeholder="Bio"
                            defaultValue={dataUser.bio}
                            onChange={({ target }) =>
                              setUserInfo({
                                ...userInfo,
                                bio: target.value,
                              })
                            }
                            className="py-2 px-2 ml-1 w-full h-32 mt-2 rounded-lg bg-white shadow text-gray-800"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-5 mt-8">
                    <button className="px-6 py-2 rounded-lg text-center text-secondColor bg-white hover:bg-gray-300">
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 text-center rounded-lg text-white bg-secondColor hover:bg-orange-500"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
                {/* akhir isian informasi akun */}

                {/* Perbarui password */}
                <div className="relative">
                  <p className="text-left text-xl font-extrabold border-b-2 border-opacity-20 pt-52 text-white">
                    Perbarui Password
                  </p>
                  <div className="mt-7">
                    <p className="text-white text-lg">Password sebelumnya</p>
                    <label htmlFor="PassSblmnya">
                      <input
                        name="pass_sblm"
                        type="pass_sblm"
                        id="pass_sblm"
                        className="py-2 px-2 ml-1 w-full mt-2 rounded-lg bg-white shadow text-thirdColor"
                      />
                    </label>

                    <p className="text-white text-lg mt-3">Password Baru</p>
                    <label htmlFor="PassBaru">
                      <input
                        name="pass_baru"
                        type="pass_baru"
                        id="pass_baru"
                        className="py-2 px-2 ml-1 w-full mt-2 rounded-lg bg-white shadow text-thirdColor"
                      />
                    </label>

                    <p className="text-white text-lg mt-3">
                      Konfirmasi Password
                    </p>
                    <label htmlFor="Pass">
                      <input
                        name="pass"
                        type="pass"
                        id="pass"
                        className="py-2 px-2 ml-1 w-full mt-2 rounded-lg bg-white shadow text-thirdColor"
                      />
                    </label>
                  </div>
                  <div className="flex justify-end mt-7 gap-6">
                    <button className="px-6 py-2 rounded-lg text-center text-secondColor bg-white hover:bg-gray-300">
                      Batal
                    </button>
                    <button className="px-5 py-2 text-center rounded-lg text-white bg-secondColor hover:bg-orange-500">
                      Simpan
                    </button>
                  </div>
                  <Image
                    src="/imgs/astroMod/astro-pass.png"
                    alt="astro 7"
                    width={300}
                    height={300}
                    priority
                    className="w-96 mx-auto mt-2"
                  />
                </div>
              </div>
              {/* akhir konten pengaturan */}
            </div>
            <div className="basis-1/5">
              <Image
                src="/imgs/astronout/astro7.png"
                alt="astro 7"
                width={300}
                height={300}
                priority
                className="w-96 mx-auto mt-2 ml-4"
              />
            </div>
          </div>
        </section>
        {/* akhir bagian tentang canopus */}
      </main>
    </Layout>
  );
}

export async function getServerSideProps(req, res) {
  // mengambil token session
  const session = await getSession(req, res);
  const tokenAccess = session.user.token;
  const username = session.user.user.username;

  // mengambil data bintang pada canopusAPI
  const resUser = await fetch(`http://canopusapi.test/api/user/${username}`, {
    headers: {
      Authorization: `Bearer ${tokenAccess}`,
    },
  });
  const user = await resUser.json();
  const dataUser = user.data;

  return {
    props: {
      dataUser: dataUser,
      token: tokenAccess,
    },
  };
}
