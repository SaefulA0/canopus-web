import Layout from "../layouts/layout";
import Router, { useRouter } from "next/router";

export default function showUsers(){
    const router = useRouter();
    return(
        <Layout title="Show Users">
        <main className="font-inter">
          <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
            {/* main */}
            <div className="flex flex-wrap md:flex-nowrap">
              {/* flex kiri */}
              <div className="w-full h-fit container rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
                {/* form untuk mengisi data anggota baru */}
                <form>
                  <div className="flex flex-col justify-center">
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Username
                        </span>
                        <input
                          type="text"
                          name="username"
                          className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Email
                        </span>
                        <input
                          type="text"
                          name="email"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                    <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Password
                        </span>
                        <input
                          type="password"
                          name="password"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block" for="file_input">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Avatar
                        </span>
                        <input
                          type="file"
                          id="file_input"
                          name="avatar"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block" for="multiple_files">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Banner
                        </span>
                        <input
                          type="file"
                          id="multiple_files"
                          name="banner"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Bio
                        </span>
                        <input
                          type="text"
                          name="bio"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    {/* section button */}
                    <div className="flex justify-between mt-12">
                      {/* button batal */}
                      <button
                        type="button"
                        onClick={() => router.back()}
                        className="w-full  px-7 mr-4 md:px-16 lg:px-20 py-2 rounded-lg bg-[#718096] hover:bg-[#4A5568] text-white shadow-md"
                      >
                        Kembali
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
}