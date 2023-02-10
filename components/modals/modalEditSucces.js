import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function ModalEditSuccess() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
    location.reload();
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-thirdColor w-full max-w-md transform overflow-hidden rounded-2xl p-6 align-middle shadow-xl transition-all">
                  <div className="mx-auto cursor-pointer md:my-4">
                    <img
                      src="../../imgs/modals/check.png"
                      alt="Logo"
                      width={128}
                      height={128}
                      className="mx-auto"
                    />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-100"
                  >
                    Profil berhasil diperbarui
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-200">
                      Profil kamu berhasil diperbarui
                      <br />
                      silakan lanjutkan petualangan mu Astroners!
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-20 inline-flex text-gray-200 justify-center rounded-md border border-transparent bg-secondColor px-4 py-2 text-sm text-slate-100 transition ease-in-out hover:-translate-y-1 hover:bg-secondColorHover duration-300"
                      onClick={closeModal}
                    >
                      Tutup
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
