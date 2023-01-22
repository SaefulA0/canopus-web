import { Carousel } from "flowbite-react";
import Image from "next/legacy/image";

export default function CarouselHome({ dataContent }) {
  // console.log(dataContent);
  return (
    <>
      <Carousel
        slideInterval={5000}
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
        {dataContent.map((dataContent) => {
          return (
            <>
              <div
                key={dataContent.title}
                className="flex justify-center gap-8"
              >
                <div className="w-96 aspect-video bg-secondColor flex justify-center items-center">
                  {dataContent.mainpicture ? (
                    <img
                      src="/imgs/halUnik/solarWind.jpg"
                      alt="img content"
                      className="bg-cover bg-no-repeat aspect-video"
                    />
                  ) : (
                    <img
                      src="/imgs/defaultContent.png"
                      alt="img content"
                      className="bg-cover bg-no-repeat aspect-video"
                    />
                  )}
                </div>
                <div className="relative w-3/6 container whitespace-normal text-textMainColor mt-3">
                  <h2 className="text-xl mb-2 font-bold">
                    {dataContent.title}
                  </h2>
                  <p className="indent-8 text-justify text-opacity-70 leading-relaxed line-clamp-4">
                    {dataContent.intro}
                  </p>
                  <a
                    type="button"
                    href={`/bendaLangit/lihat/${dataContent.id}`}
                    className="absolute bottom-0 right-0 w-fit mt-2 py-2 px-8 rounded-lg shadow-xl bg-secondColor transition ease-in-out hover:-translate-y-1 hover:bg-secondColorHover duration-300"
                  >
                    Lihat
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
}
