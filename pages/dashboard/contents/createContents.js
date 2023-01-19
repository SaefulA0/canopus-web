import Layout from "../layouts/layout";

export default function createContents () {
    return(
        <Layout title="Tambah Simpanan Sukarela">
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
                          Title
                        </span>
                        <input
                          type="text"
                          name="title"
                          className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Intro
                        </span>
                        <input
                          type="text"
                          name="intro"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                    <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          History
                        </span>
                        <input
                          type="text"
                          name="history"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Category
                        </span>
                        <input
                          type="text"
                          name="category"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Coordinate
                        </span>
                        <input
                          type="text"
                          name="coordinate"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                         Distance 
                        </span>
                        <input
                          type="text"
                          name="distance"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Event
                        </span>
                        <input
                          type="text"
                          name="event"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Exerpt
                        </span>
                        <input
                          type="text"
                          name="exerpt"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block" for="file_input">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Main Picture
                        </span>
                        <input
                          type="file"
                          id="file_input"
                          name="mainPicture"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block" for="multiple_files">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Pictures
                        </span>
                        <input
                          type="file"
                          id="ultiple_files"
                          name="pictures"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Slug
                        </span>
                        <input
                          type="text"
                          name="slug"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Trivia
                        </span>
                        <input
                          type="text"
                          name="trivia"
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
                      {/* button simpan */}
                      <button className="w-full  px-7 md:px-16 lg:px-20 py-2 rounded-lg bg-[#48BB78] hover:bg-[#38A169] text-white shadow-md">
                        Tambah
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
}