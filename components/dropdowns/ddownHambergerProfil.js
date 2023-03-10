import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function BtnHambergerProfil() {
  const { session } = useSession();

  console.log(session);

  const handleLogout = async (e) => {
    e.preventDefault();

    const res = await axios({
      method: "PUT",
      url: `http://canopusapi.test/api/logout`,
      headers: {
        Authorization: `Bearer ${tokenAccess}`,
      },
      data: {
        username: userInfo.username,
        email: userInfo.email,
        bio: userInfo.bio,
      },
    });
  };

  return (
    <>
      <Menu as="div" className="relative w-fit mt-1">
        <Menu.Button>
          <div className="group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 transition ease-in-out hover:scale-110 hover:-translate-y-1 hover:stroke-secondColorHover duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Menu.Items className="w-32 absolute z-20 mt-1 right-0 bg-thirdColor rounded-xl shadow-lg">
            <Menu.Item>
              <div className="group hover:bg-secondColorHover rounded-t-lg font-semibold transition ease-in-out hover:-translate-y-1 duration-300">
                <a
                  href="/profile/favorite"
                  className="flex text-gray-200 w-full items-center cursor-pointer text-sm rounded-t-md px-2 py-2 hover:bg-opacity-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 stroke-gray-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  Favorite
                </a>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="group hover:bg-secondColorHover font-semibold transition ease-in-out hover:-translate-y-1 duration-300">
                <a
                  href="/profile/pengaturanProfile"
                  className="flex text-gray-200 w-full items-center cursor-pointer text-sm px-2 py-2 hover:bg-opacity-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 stroke-gray-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  Edit Profil
                </a>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="group hover:bg-red-500 rounded-b-lg font-semibold transition ease-in-out hover:-translate-y-1 duration-300">
                <button
                  onClick={() => signOut()}
                  className="flex text-red-500 w-full items-center cursor-pointer text-sm rounded-t-md px-2 py-2 group-hover:text-white hover:bg-opacity-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 stroke-red-500 group-hover:stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Keluar
                </button>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
