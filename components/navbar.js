import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import BtnProfil from "./dropdowns/ddownProfil";

const navigationRoutes = ["beranda", "bendaLangit", "tentangCanopus"];

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <header className="absolute z-50 px-5 py-3 w-full text-textMainColor body-font bg-gradient-to-b from-gray-900">
        <div className="relative w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            as="image"
            rel="preload"
            href="/beranda"
            className="absolute mb-4 md:mb-0"
          >
            <Image
              src="/imgs/logo.png"
              alt="Astro 4"
              priority={true}
              width={300}
              height={300}
              className="mx-auto w-56"
            />
          </Link>
          <nav className=" mx-auto justify-evenly text-mainTextColor md:mr-auto flex flex-wrap gap-5 items-center text-lg font-medium">
            {navigationRoutes.map((singleRoute) => {
              return (
                <NavigationLink
                  key={singleRoute}
                  href={`/${singleRoute}`}
                  text={singleRoute}
                  router={router}
                />
              );
            })}
          </nav>
          {/* <button className="inline-flex shadow-xl text-white bg-secondColor border-0 py-1 px-4 focus:outline-none rounded text-lg transition ease-in-out hover:-translate-y-1 hover:bg-secondColorHover duration-300">
            Login
          </button> */}
          <BtnProfil />
        </div>
      </header>
    </>
  );
}

function NavigationLink({ href, text, router }) {
  const isActive = router.asPath === (href === "/" ? "/beranda" : href);
  return (
    <Link href={href === "/" ? "/beranda" : href} passHref>
      <div
        href={href === "/" ? "/beranda" : href}
        className={`${isActive && "nav_item_active"} nav_item`}
      >
        {text}
      </div>
    </Link>
  );
}
