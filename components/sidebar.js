import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
function SideNavbar() {
  return (
    <>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 left-4 inline-flex items-center peer justify-center rounded-md p-2 text-white hover:bg-[#C6F6D5] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="block md:hidden h-6 w-6 fill-white group-hover:fill-white"
            aria-hidden="true"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </Disclosure.Button>
        <div className="p-6 w-3/5 min-h-screen shadow-lg border-2 md:shadow-none md:border-0 bg-[#282F6A] fixed md:static z-20 top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <div className="mt-4">
              {/* Nav dashboard */}
              <Link href="/dashboard">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-sm m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-white group-hover:stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <span className="text-base text-white group-hover:text-white font-medium ">
                    Dashboard
                  </span>
                </div>
              </Link>
            </div>
            {/* Master data */}
            <div>
              <div className="mb-1 pl-5 p-2 ">
                <h1 className="text-[#A0AEC0]">Master Data</h1>
              </div>
              {/* Nav simpanan */}
              <Link href="/dashboard/contents">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-sm m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-white group-hover:stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  <span className="text-base text-white group-hover:text-white font-medium ">
                    Contents
                  </span>
                </div>
              </Link>
              {/* Nav Anggota */}
              <Link href="/dashboard/favorites">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-sm m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-white group-hover:stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  <span className="text-base text-white group-hover:text-white font-medium ">
                    Favorites
                  </span>
                </div>
              </Link>
            </div>
            <Link href="/dashboard/users">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-sm m-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 stroke-white group-hover:stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>

                <span className="text-base text-white group-hover:text-white font-medium ">
                  Users
                </span>
              </div>
            </Link>
            <button onClick={() => signOut()}>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 mt-96 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-sm m-auto">
                <span className="text-base text-white group-hover:text-white font-medium ">
                  Sign Out
                </span>
              </div>
            </button>
          </div>
        </div>
      </Disclosure>
    </>
  );
}
export default SideNavbar;
