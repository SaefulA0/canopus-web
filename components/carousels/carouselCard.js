import Image from "next/image";
import Link from "next/link";

export default function CarouselCard({ dataContentIndex }) {
  return (
    <>
      <div className="relative bg-mainColor shadow-lg text-textMainColor justify-between flex w-11/12 h-auto py-9 px-14 mx-auto border-2 border-gray-600 border-opacity-50 rounded-lg">
        <div className="basis-3/4">
          <p className="text-2xl mb-4 font-bold">{dataContentIndex.title}</p>
          <p className="text-gray-100 text-lg indent-8 text-justify text-opacity-70 leading-relaxed line-clamp-4 mb-8">
            {dataContentIndex.intro}
          </p>
          <Link
            href={`/bendaLangit/lihat/${dataContentIndex.id}`}
            className="absolute bottom-9 left-14 inline-flex shadow-xl text-white bg-secondColor py-2 px-8 focus:outline-none rounded-lg text-lg transition ease-in-out hover:-translate-y-1 hover:bg-secondColorHover duration-300"
          >
            Lihat
          </Link>
        </div>
        {dataContentIndex.mainpicture ? (
          <img
            src={`/imgs/halUnik/${dataContentIndex.mainpicture}`}
            alt="bg"
            className="w-60 h-60 aspect-video object-cover rounded-lg"
          />
        ) : (
          <img
            src="/imgs/defaultContentSquare.png"
            alt="bg"
            className="w-60 h-60 aspect-video object-cover rounded-lg"
          />
        )}
      </div>
    </>
  );
}
