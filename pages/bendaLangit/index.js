import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "../../components/layout";
import CarouselCard from "../../components/carousels/carouselCard";
import SwiperCore, { Autoplay } from "swiper";
import CardKontenPlanets from "../../components/cards/cardContentPlanets";
import CardContentStars from "../../components/cards/cardContentStars";
import CardKontenConstellations from "../../components/cards/cardContentConstellation";
import CardKontenOthers from "../../components/cards/cardContentOthers";

export default function BendaLangit({
  dataContentIndex,
  dataContentPlanets,
  dataContentStars,
  dataContentOthers,
  dataContentConstellations,
}) {
  useEffect(() => {
    AOS.init();
  });
  SwiperCore.use([Autoplay]);

  return (
    <Layout title="Daftar Benda Langit">
      <main>
        <section className="min-h-screen bg-planetBG bg-cover items-center justify-center">
          <div className="container w-full mx-auto pt-32 mb-16">
            <div className="flex flex-row">
              <div className="basis-1/3"></div>
              <div className="basis-full w-full">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="500"
                  className="text-4xl pt-14 pb-10 text-center font-bold text-white "
                >
                  Selamat datang di samudra angkasa, Astroners!
                </h1>
                {/* Search */}
                <form data-aos="fade-right" data-aos-duration="500" action="">
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="default-search"
                      className="block p-4 pl-10 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Benda langit apa yang ingin kamu kunjungi?"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <Image
                src="/imgs/astronout/astro7.png"
                alt="astro 7"
                width={300}
                height={300}
                priority
                className="w-80"
                data-aos="fade-left"
                data-aos-duration="500"
              />
            </div>
          </div>
          {/* Carousel Card */}
          <Swiper
            data-aos="fade-top"
            data-aos-duration="500"
            data-aos-anchor-placement="center-bottom"
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
          >
            {dataContentIndex.map((dataContentIndex) => (
              <SwiperSlide key={dataContentIndex.id}>
                <CarouselCard dataContentIndex={dataContentIndex} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Section list */}
          <div>
            <div className=" ml-4 pt-32 flex justify-between px-20">
              <h1
                data-aos="fade-right"
                data-aos-duration="500"
                className="text-3xl font-bold text-white"
              >
                Planet
              </h1>
              <Link
                data-aos="fade-top"
                data-aos-duration="800"
                href="/bendaLangit/planet"
              >
                <span className="inline-flex text-gray-50 opacity-80 focus:outline-none hover:underline hover:opacity-100 hover:text-secondColor transition ease-in-out hover:-translate-y-1 duration-300 rounded-md text-lg">
                  Lihat selengkapnya
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-10 pt-10 pb-20">
              {dataContentPlanets.map((dataContentPlanets) => (
                <div data-aos="fade-top" data-aos-duration="500">
                  <CardKontenPlanets
                    key={dataContentPlanets.id}
                    dataContentPlanets={dataContentPlanets}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className=" ml-4 flex justify-between px-20">
              <h1
                data-aos="fade-right"
                data-aos-duration="500"
                className="text-3xl font-bold text-white"
              >
                Bintang
              </h1>
              <Link
                data-aos="fade-top"
                data-aos-duration="800"
                href="/bendaLangit/bintang"
              >
                <span className="inline-flex text-gray-50 opacity-80 focus:outline-none hover:underline hover:opacity-100 hover:text-secondColor transition ease-in-out hover:-translate-y-1 duration-300 rounded-md text-lg">
                  Lihat selengkapnya
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-10 pt-10 pb-20">
              {dataContentStars.map((dataContentStars) => (
                <div data-aos="fade-top" data-aos-duration="500">
                  <CardContentStars
                    key={dataContentStars.id}
                    dataContentStars={dataContentStars}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className=" ml-4 flex justify-between px-20">
              <h1
                data-aos="fade-right"
                data-aos-duration="500"
                className="text-3xl font-bold text-white"
              >
                Rasi Bintang
              </h1>
              <Link
                data-aos="fade-top"
                data-aos-duration="800"
                href="/bendaLangit/rasiBintang"
              >
                <span className="inline-flex text-gray-50 opacity-80 focus:outline-none hover:underline hover:opacity-100 hover:text-secondColor transition ease-in-out hover:-translate-y-1 duration-300 rounded-md text-lg">
                  Lihat selengkapnya
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-10 pt-10 pb-20">
              {dataContentConstellations.map((dataContentConstellations) => (
                <div data-aos="fade-top" data-aos-duration="500">
                  <CardKontenConstellations
                    key={dataContentConstellations.id}
                    dataContentConstellations={dataContentConstellations}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className=" ml-4 flex justify-between px-20">
              <h1
                data-aos="fade-right"
                data-aos-duration="500"
                className="text-3xl font-bold text-white"
              >
                Benda Langit Lainnya
              </h1>
              <Link
                data-aos="fade-top"
                data-aos-duration="800"
                href="/bendaLangit/lainnya"
              >
                <span className="inline-flex text-gray-50 opacity-80 focus:outline-none hover:underline hover:opacity-100 hover:text-secondColor transition ease-in-out hover:-translate-y-1 duration-300 rounded-md text-lg">
                  Lihat selengkapnya
                </span>
              </Link>
            </div>
            <div className="justify-center flex flex-wrap gap-10 pt-10 pb-20">
              {dataContentOthers.map((dataContentOthers) => (
                <div data-aos="fade-top" data-aos-duration="500">
                  <CardKontenOthers
                    key={dataContentOthers.id}
                    dataContentOthers={dataContentOthers}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export async function getServerSideProps() {
  // mengambil data index content pada canopusAPI
  const resContent = await fetch(
    `http://canopusapi.test/api/content?category=planet`
  );
  const content = await resContent.json();
  const dataContent = content.data;
  const reverseContent = dataContent.reverse();
  const limitContent = reverseContent.slice(0, 3);

  // mengambil data planet pada canopusAPI
  const resContentPlanet = await fetch(
    `http://canopusapi.test/api/content?category=planet`
  );
  const contentPlanet = await resContentPlanet.json();
  const dataContentPlanet = contentPlanet.data;
  const limitContentPlanet = dataContentPlanet.slice(0, 3);

  // mengambil data bintang pada canopusAPI
  const resContentStar = await fetch(
    `http://canopusapi.test/api/content?category=bintang`
  );
  const contentStar = await resContentStar.json();
  const dataContentStar = contentStar.data;
  const limitContentStar = dataContentStar.slice(0, 3);

  // mengambil data rasi bintang pada canopusAPI
  const resContentConstellation = await fetch(
    `http://canopusapi.test/api/content?category=rasi bintang`
  );
  const contentConstellation = await resContentConstellation.json();
  const dataContentConstellation = contentConstellation.data;
  const limitContentConstellation = dataContentConstellation.slice(0, 3);

  // mengambil data lainnya pada canopusAPI
  const resContentOthers = await fetch(
    `http://canopusapi.test/api/content?category=lainnya di angkasa`
  );
  const contentOthers = await resContentOthers.json();
  const dataContentOthers = contentOthers.data;
  const limitContentOthers = dataContentOthers.slice(0, 3);

  return {
    props: {
      dataContentIndex: limitContent,
      dataContentPlanets: limitContentPlanet,
      dataContentStars: limitContentStar,
      dataContentConstellations: limitContentConstellation,
      dataContentOthers: limitContentOthers,
    },
  };
}
