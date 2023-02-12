import Link from "next/link";

export default function CardHalUnik({ dataUniqContent }) {
  return (
    <>
      <div
        key={dataUniqContent.id}
        className="w-fit h-fit mt-4 mr-4 relative p-1 bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700 rounded-lg z-10 shadow-md cursor-pointer mb-6 transition ease-in-out hover:-translate-y-1 duration-300"
      >
        <Link href={`/bendaLangit/lihat/${dataUniqContent.id}`}>
          {dataUniqContent.mainpicture ? (
            <img
              src={`/imgs/planet/${dataUniqContent.mainpicture}`}
              alt="bg"
              width={512}
              height={512}
              className="w-64 aspect-square object-cover rounded-lg"
            />
          ) : (
            <img
              src="/imgs/defaultContentSquare.png"
              alt="bg"
              width={512}
              height={512}
              className="w-64 aspect-square object-cover rounded-lg"
            />
          )}
          <p className="absolute bottom-5 left-5 font-medium">
            {dataUniqContent.title}
          </p>
        </Link>
      </div>
    </>
  );
}
