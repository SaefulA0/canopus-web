import Link from "next/link";
import { useSession } from "next-auth/react";

export default function CardKontenPlanets({ dataContentPlanets }) {
  const { data: session, status } = useSession();

  return (
    <>
      <div
        key={dataContentPlanets.id}
        className="relative w-fit h-fit mt-4 mr-4 p-1 bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-700 rounded-lg z-10 shadow-md cursor-pointer mb-6 transition ease-in-out hover:-translate-y-1 duration-300"
      >
        <Link href={`/bendaLangit/lihat/${dataContentPlanets.id}`}>
          {dataContentPlanets.mainpicture ? (
            <img
              src={`/imgs/planet/${dataContentPlanets.mainpicture}`}
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
          {dataContentPlanets.mainpicture ? (
            <div className="absolute top-6 left-6">
              <p className="text-textMainColor text-sm">
                <span className="font-medium">Jarak : </span>
                <br />
                {dataContentPlanets.distance}
              </p>
            </div>
          ) : null}
          <div className="absolute bottom-6 left-6">
            <p className="font-medium text-textMainColor">
              {dataContentPlanets.title}
            </p>
          </div>
          {/* {status === "authenticated" && (
            <div className="absolute bottom-6 right-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 stroke-gray-100 hover:fill-secondColorHover hover:stroke-secondColorHover transition ease-in-out hover:-translate-y-1 duration-300"
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
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 stroke-gray-100 hover:fill-secondColorHover hover:stroke-secondColorHover transition ease-in-out hover:-translate-y-1 duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </div>
          )} */}
        </Link>
      </div>
    </>
  );
}
