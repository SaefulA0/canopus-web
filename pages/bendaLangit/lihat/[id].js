import Image from "next/legacy/image";
import { useSession, getSession } from "next-auth/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos/dist/aos.css";

import Layout from "../../../components/layout";
import CardHalUnik from "../../../components/cards/cardHalUnik";
import CardKontenPlanets from "../../../components/cards/cardContentPlanets";
import CardKontenStars from "../../../components/cards/cardContentStars";
import CardKontenConstellations from "../../../components/cards/cardContentConstellation";
import CardKontenOthers from "../../../components/cards/cardContentOthers";

export default function lihatBenda({
  ytIdVideo,
  dataContentShow,
  dataContentFavorite,
  dataUniqContent,
  dataContentPlanets,
  dataContentStars,
  dataContentOthers,
  dataContentConstellations,
  usernameID,
  idFav,
  token,
}) {
  // memberikan efek pada setiap element
  useEffect(() => {
    AOS.init();
  });
  SwiperCore.use([Autoplay]);

  // menghapus html element dalam data intro
  const [textContentIntro, setTextContentIntro] = useState(
    dataContentShow.intro
  );
  const [textContentHistory, setTextContentHistory] = useState(
    dataContentShow.history
  );

  useEffect(() => {
    const regex = /(<([^>]+)>)/gi;
    const newString = textContentIntro.replace(regex, "");
    setTextContentIntro(newString);
  }, []);

  useEffect(() => {
    const regex = /(<([^>]+)>)/gi;
    const newString = textContentHistory.replace(regex, "");
    setTextContentHistory(newString);
  }, []);

  // pengkondisian untuk setiap card content
  const TotalHalUnik = dataUniqContent.length;
  let halUnik;
  if (TotalHalUnik >= 4) {
    halUnik = 4;
  } else {
    halUnik = TotalHalUnik;
  }

  const TotalPlanet = dataContentPlanets.length;
  let planet;
  if (TotalPlanet >= 4) {
    planet = 4;
  } else {
    planet = TotalPlanet;
  }

  const TotalOthers = dataContentOthers.length;
  let others;
  if (TotalOthers >= 4) {
    others = 4;
  } else {
    others = TotalOthers;
  }

  const TotalStars = dataContentStars.length;
  let stars;
  if (TotalStars >= 4) {
    stars = 4;
  } else {
    stars = TotalStars;
  }

  const TotalConstellations = dataContentConstellations.length;
  let Constellations;
  if (TotalConstellations >= 4) {
    Constellations = 4;
  } else {
    Constellations = TotalConstellations;
  }

  // handleFavorite
  const [favorite, setFavorite] = useState();
  const iduser = usernameID;
  const idcontent = dataContentShow.id;
  const tokenAccess = token;

  useEffect(() => {
    if (dataContentFavorite == 0) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  }, []);

  const handleFavorite = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "POST",
      url: `http://canopusapi.test/api/favorite?username=${iduser}&content_id=${idcontent}`,
      headers: {
        Authorization: `Bearer ${tokenAccess}`,
      },
    }).then(location.reload());
  };

  const handleDeleteFavorite = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "DELETE",
      url: `http://canopusapi.test/api/favorite/${idFav}`,
      headers: {
        Authorization: `Bearer ${tokenAccess}`,
      },
    }).then(location.reload());
  };

  return (
    <Layout title="Lihat">
      <main>
        {/* Gambar benda langit */}
        <section className="h-screen flex justify-center items-center text-gray-600 body-font">
          <>
            <div
              style={{
                zIndex: -1,
                position: "fixed",
                width: "100vw",
                height: "100vh",
              }}
            >
              {dataContentShow.mainpicture ? (
                <img
                  src={`/imgs/contents/${dataContentShow.mainpicture}`}
                  alt="bg"
                  layout="fill"
                  onError="this.onerror=null;this.src='https://placeimg.com/200/300/animals';"
                  // objectFit="cover"
                  // priority={true}
                  className="w-full h-full bg-center bg-cover bg-no-repeat"
                />
              ) : (
                <Image
                  src="/imgs/defaultContent.png"
                  alt="bg"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  className="w-full h-full bg-center bg-cover bg-no-repeat"
                />
              )}
            </div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow w-fit md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-anchor-placement="top-center"
                  className="title-font text-4xl mb-2 font-bold text-gray-100"
                >
                  {dataContentShow.title}
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-anchor-placement="top-center"
                  className="mb-8 leading-relaxed text-secondColor italic font-semibold"
                >
                  Planet Biru
                </p>
              </div>
            </div>
            <button className="absolute right-16 bottom-16">
              {/* {status === "authenticated" && (
                <div
                  data-aos="fade-top"
                  data-aos-duration="800"
                  className="absolute bottom-6 right-6"
                  onClick={handleFavorite}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-10 h-10 stroke-gray-100 hover:fill-secondColorHover hover:stroke-secondColorHover transition ease-in-out hover:-translate-y-1 duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              )}
              {status === "unauthenticated" && (
                <div className="absolute hidden bottom-6 right-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-10 h-10 stroke-gray-100 hover:fill-secondColorHover hover:stroke-secondColorHover transition ease-in-out hover:-translate-y-1 duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              )} */}
              {favorite ? (
                <div
                  data-aos="fade-top"
                  data-aos-duration="800"
                  className="absolute bottom-6 right-6"
                  onClick={handleDeleteFavorite}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-10 h-10 stroke-secondColor fill-secondColor hover:fill-secondColorHover hover:stroke-secondColorHover transition ease-in-out hover:-translate-y-1 duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              ) : (
                <div
                  data-aos="fade-top"
                  data-aos-duration="800"
                  className="absolute bottom-6 right-6"
                  onClick={handleFavorite}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-10 h-10 stroke-gray-100 hover:fill-secondColorHover hover:stroke-secondColorHover transition ease-in-out hover:-translate-y-1 duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              )}
            </button>
          </>
        </section>
        {/* Informasi kecil planet */}
        <section className="p-10 shadow-lg bg-mainColor flex justify-center items-center">
          <div className="flex text-gray-200">
            <div className="w-64 text-center">
              <h3
                data-aos="fade-right"
                data-aos-duration="500"
                className="font-bold text-secondColor mb-2"
              >
                Jarak Dari Bumi
              </h3>
              <p
                data-aos="fade-right"
                data-aos-duration="800"
                className="font-medium"
              >
                {dataContentShow.distance}
              </p>
            </div>
            <div className="w-64 text-center">
              <h3
                data-aos="fade-left"
                data-aos-duration="500"
                className="font-bold text-secondColor mb-2"
              >
                Koordinat
              </h3>
              <p
                data-aos="fade-left"
                data-aos-duration="800"
                className="font-medium"
              >
                {dataContentShow.coordinate}
              </p>
            </div>
          </div>
        </section>
        {/* Informasi planet */}
        <div className="min-h-screen px-16 py-24 bg-contentBG bg-center bg-cover bg-no-repeat flex-col justify-center items-center text-gray-600 body-font">
          <div className=" min-h-screen px-10 py-10 w-full rounded-xl bg-mainColor text-textMainColor">
            <h2
              data-aos="fade-right"
              data-aos-duration="400"
              className="text-4xl font-semibold underline mb-8"
            >
              {dataContentShow.title}
            </h2>
            <div className="flex">
              {/* basis konten kiri */}
              <div className="basis-full whitespace-normal">
                {/* penjelasan umum */}
                <div className="mb-12">
                  <h3
                    data-aos="fade-right"
                    data-aos-duration="500"
                    className="text-xl font-medium mb-2"
                  >
                    Apa itu {dataContentShow.title}?
                  </h3>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="700"
                    className="indent-8 text-justify text-opacity-80 leading-relaxed"
                  >
                    {textContentIntro}
                  </p>
                </div>
                {/* sejarah */}
                <div className="mb-20">
                  <h3
                    data-aos="fade-right"
                    data-aos-duration="500"
                    className="text-xl font-medium mb-2"
                  >
                    Sejarah {dataContentShow.title}
                  </h3>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="700"
                    className="indent-8 text-justify text-opacity-80 leading-relaxed"
                  >
                    {textContentHistory}
                  </p>
                </div>
              </div>
              {/* basis konten kanan */}
              <div className="basis-1/2 ml-10">
                <h3
                  data-aos="fade-top"
                  data-aos-duration="600"
                  className="text-xl font-semibold mb-4"
                >
                  Video mengenai {dataContentShow.title}
                </h3>
                <div className="relative w-full aspect-video flex items-center justify-center">
                  {ytIdVideo.map((ytIdVideo) => {
                    return (
                      <iframe
                        data-aos="fade-bottom"
                        data-aos-duration="1000"
                        key={ytIdVideo}
                        className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${ytIdVideo}`}
                        frameborder="0"
                        allowFullScreen
                      />
                    );
                  })}
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="500"
                  className="flex justify-center mt-24 rounded-lg w-auto h-auto"
                >
                  {dataContentShow.mainpicture ? (
                    <img
                      src={`/imgs/gif/${dataContentShow.pictures}`}
                      alt="gif"
                      priority={true}
                      className="w-80 h-auto rounded-lg"
                    />
                  ) : (
                    <img
                      src="/imgs/gif/earth.gif"
                      alt="gif default"
                      width={276}
                      height={276}
                      priority={true}
                    />
                  )}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-center text-2xl font-semibold underline mb-8">
                Hal Unik Yang Pernah Terjadi Di {dataContentShow.event}
              </h2>
              <div className="flex">
                <Swiper
                  data-aos="fade-top"
                  data-aos-duration="500"
                  data-aos-anchor-placement="center-bottom"
                  slidesPerView={halUnik}
                  pagination={{ type: "progressbar" }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {dataUniqContent.map((dataUniqContent) => (
                    <SwiperSlide key={dataUniqContent.id}>
                      <CardHalUnik dataUniqContent={dataUniqContent} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-16 px-10 py-10 rounded-xl shadow-lg bg-mainColor text-textMainColor">
            <h2 className="text-2xl text-center font-semibold underline mb-6">
              {dataContentShow.category} Lainnya
            </h2>
            <div className="flex w-full">
              {dataContentShow.category == "Planet" && (
                <>
                  <Swiper
                    data-aos="fade-top"
                    data-aos-duration="500"
                    data-aos-anchor-placement="center-bottom"
                    slidesPerView={planet}
                    pagination={{ type: "progressbar" }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {dataContentPlanets.map((dataContentPlanets) => (
                      <SwiperSlide key={dataContentPlanets.id}>
                        <CardKontenPlanets
                          dataContentPlanets={dataContentPlanets}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              )}
              {dataContentShow.category == "Bintang" && (
                <>
                  <Swiper
                    data-aos="fade-top"
                    data-aos-duration="500"
                    data-aos-anchor-placement="center-bottom"
                    slidesPerView={stars}
                    pagination={{ type: "progressbar" }}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {dataContentStars.map((dataContentStars) => (
                      <SwiperSlide key={dataContentStars.id}>
                        <CardKontenStars
                          key={dataContentStars.id}
                          dataContentStars={dataContentStars}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              )}
              {dataContentShow.category == "Rasi Bintang" && (
                <>
                  <Swiper
                    data-aos="fade-top"
                    data-aos-duration="500"
                    data-aos-anchor-placement="center-bottom"
                    slidesPerView={Constellations}
                    pagination={{ type: "progressbar" }}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {dataContentConstellations.map(
                      (dataContentConstellations) => (
                        <SwiperSlide key={dataContentConstellations.id}>
                          <CardKontenConstellations
                            key={dataContentConstellations.id}
                            dataContentConstellations={
                              dataContentConstellations
                            }
                          />
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                </>
              )}
              {dataContentShow.category == "Lainnya di Angkasa" && (
                <>
                  <Swiper
                    data-aos="fade-top"
                    data-aos-duration="500"
                    data-aos-anchor-placement="center-bottom"
                    slidesPerView={others}
                    pagination={{ type: "progressbar" }}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {dataContentOthers.map((dataContentOthers) => (
                      <SwiperSlide key={dataContentOthers.id}>
                        <CardKontenOthers
                          key={dataContentOthers.id}
                          dataContentOthers={dataContentOthers}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  // mengambil token session
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const token = session.user.token;
  const username = session.user.user.username;

  // mengambil data content show canopusAPI
  const { id } = context.params;

  const resContentShow = await fetch(
    `http://canopusapi.test/api/content/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const contentShow = await resContentShow.json();
  const dataContentShow = contentShow.data;

  // mengambil data favorit
  const resContentFavorite = await fetch(
    `http://canopusapi.test/api/favorite?username=${username}&content=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const contentFavorite = await resContentFavorite.json();
  const dataContentFavorite = contentFavorite.data;
  const object_id = [];
  dataContentFavorite.forEach(function (entity) {
    object_id.push(entity.id);
  });

  // mengambil data Hal Unik yang pernah terjadi
  const eventContent = dataContentShow.event;
  const resUniqContent = await fetch(
    `http://canopusapi.test/api/content?event=${eventContent}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const uniqContent = await resUniqContent.json();
  const dataUniqContent = uniqContent.data;
  const shiftDataUniqContent = dataUniqContent.shift();

  // mengambil data YouTube API
  const idVideo = dataContentShow.videoId;
  const APIkey1 = "AIzaSyA5Jyd-dCU1asIJnNSoH9vmtuK8E5TD08M";
  const APIkey2 = "AIzaSyBUNRlo8oU4M2rLwScD9MHhFJk_puTiCKw";

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${idVideo}&key=${APIkey2}`
  );
  const ytdata = await response.json();
  const ytdataItem = ytdata.items;
  const ytIdVideo = ytdataItem.map((ytdataItem) => ytdataItem.id);

  // mengambil data planet pada canopusAPI
  const resContentPlanet = await fetch(
    `http://canopusapi.test/api/content?category=planet`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const contentPlanet = await resContentPlanet.json();
  const dataContentPlanet = contentPlanet.data;

  // mengambil data bintang pada canopusAPI
  const resContentStar = await fetch(
    `http://canopusapi.test/api/content?category=bintang`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const contentStar = await resContentStar.json();
  const dataContentStar = contentStar.data;

  // mengambil data rasi bintang pada canopusAPI
  const resContentConstellation = await fetch(
    `http://canopusapi.test/api/content?category=rasi bintang`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const contentConstellation = await resContentConstellation.json();
  const dataContentConstellation = contentConstellation.data;

  // mengambil data lainnya pada canopusAPI
  const resContentOthers = await fetch(
    `http://canopusapi.test/api/content?category=lainnya di angkasa`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const contentOthers = await resContentOthers.json();
  const dataContentOthers = contentOthers.data;

  return {
    props: {
      dataContentShow: dataContentShow,
      dataUniqContent: dataUniqContent,
      ytIdVideo: ytIdVideo,
      dataContentPlanets: dataContentPlanet,
      dataContentStars: dataContentStar,
      dataContentConstellations: dataContentConstellation,
      dataContentOthers: dataContentOthers,
      dataContentFavorite: dataContentFavorite,
      usernameID: username,
      idFav: object_id,
      idcontent: id,
      token: token,
    },
  };
}
