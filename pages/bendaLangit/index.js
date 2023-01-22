import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CarouselCard from "../../components/cards/carouselCard";
import SwiperCore, {Autoplay} from 'swiper';
import CardKonten from "../../components/cards/cardKonten";

export default function BendaLangit() {

  SwiperCore.use([Autoplay])
  return (
    <Layout title="Daftar Benda Langit">
      <main>
        <section className="min-h-screen bg-planetBG bg-cover items-center justify-center">
          <div className="container w-full mx-auto pt-32 mb-16">
            <div className="flex flex-row">
              <div className="basis-1/3"></div>
                <div className="basis-full w-full">
                  <h1 className="text-4xl pt-14 pb-10 text-center font-bold text-white ">
                    Selamat datang di samudra angkasa, Astroners!
                  </h1>
                  {/* Search */}
                  <form action="">
                      <div class="relative">
                          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                          </div>
                          <input 
                              type="text" 
                              id="default-search" 
                              class="block p-4 pl-10 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Benda langit apa yang ingin kamu kunjungi?" 
                              name="search"
                              value=""/>
                      </div> 
                  </form> 
                </div>
              <Image
              src="/imgs/astronout/astro7.png"
              alt="astro 7"
              width={300}
              height={300}
              priority
              className=""/>
            </div>
          </div>
          {/* Carousel Card */}
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{ 
              delay: 5000
             }}
          >
            <SwiperSlide><CarouselCard/></SwiperSlide>
            <SwiperSlide><CarouselCard/></SwiperSlide>
            <SwiperSlide><CarouselCard/></SwiperSlide>
            <SwiperSlide><CarouselCard/></SwiperSlide>
          </Swiper>
          {/* Section list */}
          <div>
            <div class=" ml-4 pt-32 flex justify-between px-20">
                <h1 class="text-3xl font-bold text-white">Planet</h1>
                  <Link
                      href="/planet"
                      className="inline-flex text-white focus:outline-none hover:underline hover:text-secondColor rounded-md text-lg">
                      Lihat selengkapnya
                  </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-10 pt-10 pb-20">
                <CardKonten/>
            </div>
          </div>
          <div>
            <div class=" ml-4 flex justify-between px-20">
                <h1 class="text-3xl font-bold text-white">Planet Kerdil</h1>
                  <Link
                      href="/planet"
                      className="inline-flex text-white focus:outline-none hover:underline hover:text-secondColor rounded-md text-lg">
                      Lihat selengkapnya
                  </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-10 pt-10 pb-20">
                <CardKonten/>
            </div>
          </div>
          <div>
            <div class=" ml-4 flex justify-between px-20">
                <h1 class="text-3xl font-bold text-white">Bintang</h1>
                  <Link
                      href="/planet"
                      className="inline-flex text-white focus:outline-none hover:underline hover:text-secondColor rounded-md text-lg">
                      Lihat selengkapnya
                  </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-10 pt-10 pb-20">
                <CardKonten/>
            </div>
          </div>
          <div>
            <div class=" ml-4 flex justify-between px-20">
                <h1 class="text-3xl font-bold text-white">Rasi Bintang</h1>
                  <Link
                      href="/planet"
                      className="inline-flex text-white focus:outline-none hover:underline hover:text-secondColor rounded-md text-lg">
                      Lihat selengkapnya
                  </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-10 pt-10 pb-20">
                <CardKonten/>
            </div>
          </div>
          <div>
            <div class=" ml-4 flex justify-between px-20">
                <h1 class="text-3xl font-bold text-white">Benda Langit Lainnya</h1>
                  <Link
                      href="/planet"
                      className="inline-flex text-white focus:outline-none hover:underline hover:text-secondColor rounded-md text-lg">
                      Lihat selengkapnya
                  </Link>
            </div>
            <div className="justify-center flex flex-wrap gap-10 pt-10 pb-20">
                <CardKonten/>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
