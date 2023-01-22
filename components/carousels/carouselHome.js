import { Carousel } from "flowbite-react";

export default function CarouselHome() {
  return (
    <>
      <Carousel
        slide={false}
        leftControl={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 fill-gray-300 transition ease-in-out hover:-translate-y-1 duration-300"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
              clipRule="evenodd"
            />
          </svg>
        }
        rightControl={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 fill-gray-300 transition ease-in-out hover:-translate-y-1 duration-300"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipRule="evenodd"
            />
          </svg>
        }
        indicators={false}
      >
        <>
          <div className="flex justify-center gap-8">
            <div className="w-96 bg-secondColor aspect-video flex justify-center items-center">
              Video
            </div>
            <div className="relative w-3/6 container whitespace-normal text-textMainColor mt-3">
              <h2 className="text-xl mb-2 font-bold">Tata Surya</h2>
              <p className="indent-8 text-justify text-opacity-70 leading-relaxed line-clamp-4">
                Tata Surya adalah kumpulan benda langit yang terdiri dari sebuah
                bintang yang disebut matahari dan semua benda terikat oleh
                gravitasi. Benda termasuk delapan planet yang sudah diketahui
                mengorbit elips, lima planet kerdil / katai, 173 satelit alami
                yang telah diidentifikasi, dan jutaan benda langit (meteor,
                asteroid, komet) lainnya. Tata Surya adalah kumpulan benda
                langit yang terdiri dari sebuah bintang yang disebut matahari
                dan semua benda terikat oleh gravitasi.
              </p>
              <button className="absolute bottom-0 right-0 w-fit mt-2 py-2 px-8 rounded-lg shadow-xl bg-secondColor transition ease-in-out hover:-translate-y-1 hover:bg-secondColorHover duration-300">
                Lihat
              </button>
            </div>
          </div>
        </>
        <>
          <div className="flex justify-center gap-8">
            <div className="w-96 bg-secondColor aspect-video flex justify-center items-center">
              Video
            </div>
            <div className="relative w-3/6 container whitespace-normal text-textMainColor mt-3">
              <h2 className="text-xl mb-2 font-bold">Tata Surya</h2>
              <p className="indent-8 text-justify text-opacity-70 leading-relaxed line-clamp-4">
                Tata Surya adalah kumpulan benda langit yang terdiri dari sebuah
                bintang yang disebut matahari dan semua benda terikat oleh
                gravitasi. Benda termasuk delapan planet yang sudah diketahui
                mengorbit elips, lima planet kerdil / katai, 173 satelit alami
                yang telah diidentifikasi, dan jutaan benda langit (meteor,
                asteroid, komet) lainnya. Tata Surya adalah kumpulan benda
                langit yang terdiri dari sebuah bintang yang disebut matahari
                dan semua benda terikat oleh gravitasi.
              </p>
              <button className="absolute bottom-0 right-0 w-fit mt-2 py-2 px-8 rounded-lg shadow-xl bg-secondColor transition ease-in-out hover:-translate-y-1 hover:bg-secondColorHover duration-300">
                Lihat
              </button>
            </div>
          </div>
        </>
        <>
          <div className="flex justify-center gap-8">
            <div className="w-96 bg-secondColor aspect-video flex justify-center items-center">
              Video
            </div>
            <div className="relative w-3/6 container whitespace-normal text-textMainColor mt-3">
              <h2 className="text-xl mb-2 font-bold">Tata Surya</h2>
              <p className="indent-8 text-justify text-opacity-70 leading-relaxed line-clamp-4">
                Tata Surya adalah kumpulan benda langit yang terdiri dari sebuah
                bintang yang disebut matahari dan semua benda terikat oleh
                gravitasi. Benda termasuk delapan planet yang sudah diketahui
                mengorbit elips, lima planet kerdil / katai, 173 satelit alami
                yang telah diidentifikasi, dan jutaan benda langit (meteor,
                asteroid, komet) lainnya. Tata Surya adalah kumpulan benda
                langit yang terdiri dari sebuah bintang yang disebut matahari
                dan semua benda terikat oleh gravitasi.
              </p>
              <button className="absolute bottom-0 right-0 w-fit mt-2 py-2 px-8 rounded-lg shadow-xl bg-secondColor transition ease-in-out hover:-translate-y-1 hover:bg-secondColorHover duration-300">
                Lihat
              </button>
            </div>
          </div>
        </>
      </Carousel>
    </>
  );
}
