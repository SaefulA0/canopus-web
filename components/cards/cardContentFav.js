import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CardContentFav({ dataContent }) {
  return (
    <>
      <div
        key={dataContent.data.id}
        className="relative w-fit h-fit mt-4 mr-4 p-1 bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700 rounded-lg z-10 shadow-md cursor-pointer mb-6 transition ease-in-out hover:-translate-y-1 duration-300"
      >
        <Link href={`/bendaLangit/lihat/${dataContent.data.id}`}>
          {dataContent.data.mainpicture ? (
            <img
              src={`/imgs/contents/${dataContent.mainpicture}`}
              alt="bg"
              className="w-96 aspect-video object-cover rounded-lg"
            />
          ) : (
            <img
              src="/imgs/defaultContent.png"
              alt="bg"
              className="w-96 aspect-video object-cover rounded-lg"
            />
          )}
          {dataContent.data.mainpicture ? (
            <div className="absolute top-6 left-6">
              <p className="text-textMainColor text-sm">
                <span className="font-medium">Jarak : </span>
                <br />
                {dataContent.data.distance}
              </p>
            </div>
          ) : null}
          <div className="absolute bottom-6 left-6">
            <p className="font-medium text-textMainColor">
              {dataContent.data.title}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
