import Link from "next/link";

export default function CardHalUnik({ dataUniqContent }) {
  return (
    <>
      <div
        key={dataUniqContent.id}
        className="relative aspect-video z-10 shadow-md cursor-pointer snap-center mb-6 transition ease-in-out hover:-translate-y-1 duration-300"
      >
        <Link href={`/bendaLangit/lihat/${dataUniqContent.id}`}>
          {dataUniqContent.mainpicture ? (
            <img
              src={`/imgs/halUnik/${dataUniqContent.mainpicture}`}
              alt="bg"
              className="w-72 aspect-square object-cover rounded-lg"
            />
          ) : (
            <img
              src="/imgs/defaultContent.png"
              alt="bg"
              className="w-72 aspect-square object-cover rounded-lg"
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
