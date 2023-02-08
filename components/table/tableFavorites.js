import Link from "next/link";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function TableFavorites({ dataFav }) {
  return (
    <>
      <div className="relative w-full h-5">
        <Link href="/dashboard/favorites/createFavorites">
          <button className="px-4 py-1.5 h-fit text-white shadow-md rounded-full bg-[#FF9636] hover:bg-orange-500">
            Tambah Data +
          </button>
        </Link>
        <div className="flex absolute right-0">
        </div>
      </div>
      {/* Table */}
      <div className="mt-10 container">
        <table className="w-full table-auto mb-8 text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="text-center py-3 px-6 border-b-2">
                Id
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                User id
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                Content id
              </th>
              <th className="py-3 px-6 border-b-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
              {dataFav.map((favorite) => {
                return(
                  <tr key={favorite.id}className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 text-center font-medium text-gray-900 whitespace-nowrap"
                  >
                    {favorite.id}
                  </th>
                  <td className="py-4 px-6">
                    {favorite.user_id}
                  </td>
                  <td className="py-4 px-6">
                   {favorite.content_id}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Link href="/dashboard/favorites/editFavorites">
                    <button className="mx-auto mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#24a0ed] hover:bg-blue-500 text-white text-sm shadow-md">
                        Edit
                      </button>
                    </Link>
                    <Link href="/dashboard/favorites/showFavorites">
                    <button className="mx-auto mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#17a2b8] hover:bg-cyan-500 text-white text-sm shadow-md">
                        Detail
                      </button>
                    </Link>
                    <button className="mx-auto mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#dc3545] hover:bg-red-500 text-white text-sm shadow-md">
                        Hapus
                      </button>
                  </td>
                </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

