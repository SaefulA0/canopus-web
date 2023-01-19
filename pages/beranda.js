import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

export default function beranda() {
  return (
    <Layout title="Beranda">
      <main>
        {/* <Navbar /> */}
        <section className="h-screen bg-heroBG bg-center bg-cover bg-no-repeat flex justify-center items-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow w-fit md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                Hello Astroners!
                <br className="hidden lg:inline-block" />
                Selamat Datang Di Canopus
              </h1>
              <p className="mb-8 leading-relaxed text-gray-300">
                Sudah siapkah kamu untuk menjelajah <br /> luasnya samudra luar
                angkasa?
              </p>
              <Link
                href="/bendaLangit"
                className="inline-flex text-white bg-secondColor border-0 py-2 px-6 focus:outline-none rounded text-lg"
              >
                Let's GO!
              </Link>
            </div>
            {/* <div className="md:mr-28">
            <Image
              className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 object-cover object-center rounded"
              alt="hero"
              width={512}
              height={512}
              priority
              src="/imgs/astronout/astro10.png"
            />
          </div> */}
          </div>
        </section>
        {/* pembatas */}
        <section className="h-32 bg-mainColor">
          <div className="hidden">-</div>
        </section>
        {/* Tentang Canopus */}
        <section className="min-h-screen p-32 bg-homeAboutBG bg-no-repeat bg-cover">
          <div className="container">
            <div className="pb-12">
              <h1 className="underline text-3xl font-bold text-white text-center">
                Sekilas tentang Canopus
              </h1>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-5 md:gap-16 justify-center items-center">
              <div className="bg-black rounded-xl bg-opacity-50 w-80 text-center px-5 py-3">
                <h1 className="pt-5 text-white text-xl font-bold">Canopus?</h1>
                <p className="p-3 text-white text-opacity-80">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Image
                  src="/imgs/astronout/astro4.png"
                  alt="Astro 4"
                  width={300}
                  height={300}
                  priority
                  className="mx-auto w-56"
                />
              </div>
              <div className="bg-black rounded-xl bg-opacity-50 w-80 text-center px-5 py-3">
                <h1 className="pt-5 text-white text-xl font-bold">Tujuan</h1>
                <p className="p-3 text-white text-opacity-80">
                  Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Image
                  src="/imgs/astronout/astro5.png"
                  alt="Astro 5"
                  width={300}
                  height={300}
                  priority
                  className="mx-auto w-56"
                />
              </div>
              <div>
                <div className="bg-black rounded-xl bg-opacity-50 w-80 text-center px-5 py-3">
                  <h1 className="pt-5 text-white text-xl font-bold">Misi</h1>
                  <p className="p-3 text-white text-opacity-80">
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Image
                    src="/imgs/astronout/astro6.png"
                    alt="Astro 6"
                    width={300}
                    height={300}
                    priority
                    className="mx-auto w-56"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
