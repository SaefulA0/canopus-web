import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import BtnHambergerProfil from "./btnHambergerProfil";

export default function BtnProfil() {
  return (
    <>
      <Menu as="div" className="relative w-fit mt-1">
        <Menu.Button>
          <div className="group">
            <div className="p-1 backdrop-blur-sm bg-white/5 rounded-full transition ease-in-out hover:-translate-y-1 group-hover:bg-secondColorHover duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 stroke-secondColor group-hover:stroke-textMainColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
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
          <Menu.Items className="absolute z-10 mt-1 right-0 shadow-lg">
            <Menu.Item>
              <div className="w-96 h-56 rounded-lg bg-mainColor">
                <div className="">
                  <img
                    src="/imgs/backgroundProfile/bg-profile1.png"
                    alt="bg"
                    className="w-full rounded-t-lg bg-center bg-cover bg-no-repeat"
                  />
                </div>
                <div className="relative">
                  <div className="flex gap-4 px-6 py-5 items-center">
                    <img
                      src="/imgs/defaultAvatar.png"
                      alt="bg"
                      className="w-20 h-20"
                    />
                    <div>
                      <h6 className="font-semibold text-xl">Nama</h6>
                      admin
                    </div>
                  </div>
                  <div className="absolute right-6 top-3">
                    <BtnHambergerProfil />
                  </div>
                </div>
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
