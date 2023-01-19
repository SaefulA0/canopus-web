import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navigationRoutes = ["beranda", "bendaLangit", "tentangCanopus"];

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <header className="fixed z-50 px-5 py-3 w-full text-textMainColor body-font bg-gradient-to-b from-gray-900">
        <div className="relative w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            rel="preload"
            as="image"
            href="/beranda"
            className="absolute mb-4  md:mb-0"
          >
            <Image
              src="/imgs/logo.png"
              alt="Astro 4"
              priority="true"
              width={300}
              height={300}
              className="mx-auto w-56"
            />
          </Link>
          <nav className="md:ml-auto justify-evenly text-mainTextColor md:mr-auto flex flex-wrap gap-5 items-center text-lg font-medium">
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
          {/* <button className="inline-flex items-center bg-thirdColor border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
        </button> */}
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
