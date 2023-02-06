import Image from "next/image";
import Link from "next/link";
import BtnProfil from "./dropdowns/ddownProfil";

export default function NavbarExample() {
  return (
    <>
      <header className="absolute top-0 py-4 z-50 px-5 w-full text-textMainColor text-opacity-70 body-font bg-gradient-to-b from-gray-900">
        <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
          <Link
            as="image"
            rel="preload"
            href="/beranda"
            className="absolute left-14 mb-4 md:mb-0"
          >
            <Image
              src="/imgs/logo.png"
              alt="Astro 4"
              priority={true}
              width={300}
              height={300}
              className="w-56"
            />
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap gap-5 items-center text-base justify-center">
            <Link href="/beranda">
              <button className="mr-5 font-medium transition ease-in-out hover:-translate-y-1 hover:text-secondColorHover hover:text-opacity-100 duration-300">
                Beranda
              </button>
            </Link>
            <Link href="/bendaLangit">
              <button className="mr-5 font-medium transition ease-in-out hover:-translate-y-1 hover:text-secondColorHover hover:text-opacity-100 duration-300">
                Benda Langit
              </button>
            </Link>
            <Link href="/tentangCanopus">
              <button className="mr-5 font-medium transition ease-in-out hover:-translate-y-1 hover:text-secondColorHover hover:text-opacity-100 duration-300">
                Tentang
              </button>
            </Link>
          </nav>
          <div className="absolute right-10 ">
            <BtnProfil />
          </div>
        </div>
      </header>
    </>
  );
}
